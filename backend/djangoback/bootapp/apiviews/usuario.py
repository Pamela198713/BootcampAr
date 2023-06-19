from ..models import Usuario
from rest_framework import viewsets, permissions, generics
from ..serializers import UsuarioSerializer, UsuarioCreatePerSerializer, UsuarioCreateSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class UsuarioViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Usuario.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return UsuarioCreateSerializer
        return UsuarioSerializer
 
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class UsuarioRegister(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Usuario.objects.all() 

    def get_serializer_class(self):
        return UsuarioCreateSerializer

class UsuarioPerRegister(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Usuario.objects.all()
    serializer_class = UsuarioCreatePerSerializer