from rest_framework import generics, permissions
from ..models import Product
from ..serializers import CursoSerializer

class ProductCreate(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [permissions.IsAuthenticated]