from rest_framework import serializers
from .models import Curso

class CursoSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Curso 
        fields = ['id', 'titulo', 'precio', 'descripcion', 'duracion', 'nivel', 'lenguajes', 'imagenes', 'categorias']
