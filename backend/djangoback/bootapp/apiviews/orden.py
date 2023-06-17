from ..models import Orden, OrdenDetalle, Factura
from rest_framework import viewsets, permissions, generics
from ..serializers import OrdenSerializer, OrdenDetalleSerializer, FacturaSerializer

class OrdenListCreate(viewsets.ModelViewSet):
    queryset = Orden.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = OrdenSerializer

class OrdenDetalleListCreate(generics.RetrieveAPIView):
    queryset = OrdenDetalle.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = OrdenDetalleSerializer

class FacturaListCreate(viewsets.ModelViewSet):
    queryset = Factura.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = FacturaSerializer

