"""
from . import views
"""
from dj_rest_auth.views import LoginView, LogoutView
from dj_rest_auth.registration.views import RegisterView
from django.urls import path, include
from .apiviews.product import CursoViewSet
from .apiviews.usuario import UsuarioViewSet
from .apiviews.orden import OrdenListCreate, OrdenDetalleListCreate, FacturaListCreate
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('auth/register', RegisterView.as_view(), name='account_register'),
    # path('auth/login', LoginView.as_view(), name='account_login'),
    path('auth/logout', LogoutView.as_view(), name='account_logout'),
    path('api/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/orden', OrdenListCreate.as_view({'get': 'list', 'post': 'create'}), name='orden'),
    path('api/orden/<int:pk>', OrdenListCreate.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='orden-detail'),
    path('api/orden_detalles', OrdenDetalleListCreate.as_view(), name='detail-orden'),
    path('api/factura', FacturaListCreate.as_view({'get': 'list', 'post': 'create'}), name='factura'),
    path('api/usuario', UsuarioViewSet.as_view({'get': 'list', 'post': 'create'}), name='usuario'),
    path('api/usuario/<int:pk>', CursoViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='usuario-detail'),
    path('api/product', CursoViewSet.as_view({'get': 'list', 'post': 'create'}), name='product-list'),
    path('api/product/<int:pk>', CursoViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='product-detail'),
]



