from ..models import Categoria
from rest_framework import viewsets, permissions, generics
from ..serializers import CategoriaSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CategoriaSerializer