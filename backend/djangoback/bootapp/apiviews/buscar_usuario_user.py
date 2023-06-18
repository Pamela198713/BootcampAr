from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from ..models import Usuario
from ..serializers import UsuarioSerializer

class BuscarUsuarioPorUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        user = request.query_params.get('user', None)
        if user is not None:
            usuarios = Usuario.objects.filter(user=user)
            serializer = UsuarioSerializer(usuarios, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
