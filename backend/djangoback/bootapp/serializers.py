from rest_framework import serializers
from .models import Curso, Categoria, CursoCategoria

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
