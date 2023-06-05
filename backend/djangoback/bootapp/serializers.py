from rest_framework import serializers
from .models import Curso, Categoria, CursoCategoria, Usuario

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
        instance.save()
        return instance
    
class UsuarioCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Usuario
        fields = ['email', 'username', 'password']

    def create(self, validated_data):
        password = validated_data.pop('password')
        instance = self.Meta.model(**validated_data)
        instance.set_password(password)
        instance.save()
        return instance    