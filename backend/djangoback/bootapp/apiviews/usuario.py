from ..models import Usuario
from rest_framework import viewsets, permissions, generics
from ..serializers import UsuarioSerializer, UsuarioCreateSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Usuario.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return UsuarioCreateSerializer
        return UsuarioSerializer