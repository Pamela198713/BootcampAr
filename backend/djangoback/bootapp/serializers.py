from rest_framework import serializers
from .models import Curso, Categoria, CursoCategoria, Usuario, Orden, OrdenDetalle, Factura
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model



class CursoSerializer(serializers.ModelSerializer):
    #, write_only=True
    categorias = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects.all(), many=True)

    class Meta: 
        model = Curso 
        fields = ['id', 'titulo', 'precio', 'descripcion', 'duracion', 'nivel', 'lenguajes', 'imagenes', 'categorias']

    def create(self, validated_data):
        categorias = validated_data.pop('categorias')
        curso = Curso.objects.create(**validated_data)
        for categoria in categorias:
            CursoCategoria.objects.create(curso=curso, categoria=categoria)
        return curso
    
class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Usuario
        fields = '__all__'
        read_only_fields = ['id']

    def create(self, validated_data):
        password = validated_data.pop('password')
        instance = self.Meta.model(**validated_data)
        instance.password = password
        instance.rol = 1
        instance.save()
        return instance
    
class UsuarioCreateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')  
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Usuario
        fields = ['username', 'password']

    def create(self, validated_data):
        password = validated_data.pop('password')
        username = validated_data.pop('user')['username']  

        user = User.objects.create_user(username=username, password=password)
        usuario = Usuario.objects.create(user=user, **validated_data)
        usuario.save()

        return usuario
     
class OrdenDetalleSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrdenDetalle
        fields = '__all__'

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factura
        fields = '__all__'
        read_only_fields = ['id']

class OrdenSerializer(serializers.ModelSerializer):
    detalles = OrdenDetalleSerializer(many=True, read_only=True)
    factura = FacturaSerializer(read_only=True)

    class Meta:
        model = Orden
        fields = '__all__'
        read_only_fields = ['id']

User = get_user_model()

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Agrega cualquier campo personalizado aquí
        token['username'] = user.username

        return token

    def validate(self, attrs):
        credentials = {
            'username': '',
            'password': attrs.get("password")
        }

        user_obj = User.objects.filter(email=attrs.get("username")).first() or User.objects.filter(username=attrs.get("username")).first()
        if user_obj:
            credentials['username'] = user_obj.username

        return super().validate(credentials)

