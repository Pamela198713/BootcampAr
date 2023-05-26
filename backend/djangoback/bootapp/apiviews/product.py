from ..models import Curso
from rest_framework import viewsets, permissions, generics
from ..serializers import CursoSerializer

class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CursoSerializer