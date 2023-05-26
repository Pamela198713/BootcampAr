from ..models import Usuario
from rest_framework import viewsets, permissions, generics
from ..serializers import UsuarioSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UsuarioSerializer