"""
from . import views
"""
from dj_rest_auth.views import LoginView, LogoutView
from dj_rest_auth.registration.views import RegisterView
from django.urls import path, include
from .apiviews.buscar_usuario_user import BuscarUsuarioPorUserView
from .apiviews.product import CursoViewSet, CursoPublicViewSet
from .apiviews.category import CategoriaViewSet
from .apiviews.usuario import UsuarioViewSet, CustomTokenObtainPairView, UsuarioRegister, UsuarioPerRegister
from .apiviews.orden import OrdenListCreate, OrdenDetalleListCreate, FacturaListCreate
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('auth/register', UsuarioRegister.as_view({'post': 'create'}), name='account_register'),
    # path('auth/login', LoginView.as_view(), name='account_login'),
    path('auth/logout', LogoutView.as_view(), name='account_logout'),
    path('api/token', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/orden', OrdenListCreate.as_view({'get': 'list', 'post': 'create'}), name='orden'),
    path('api/orden/<int:pk>', OrdenListCreate.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='orden-detail'),
    path('api/orden_detalles', OrdenDetalleListCreate.as_view(), name='detail-orden'),
    path('api/factura', FacturaListCreate.as_view({'get': 'list', 'post': 'create'}), name='factura'),
    path('api/usuario', UsuarioViewSet.as_view({'get': 'list', 'post': 'create'}), name='usuario'),
    path('api/usuarioper', UsuarioPerRegister.as_view({'post': 'create'}), name='usuario'),
    path('api/usuario/<int:pk>', UsuarioViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='usuario-detail'),
    path('api/usuarios/withuser/', BuscarUsuarioPorUserView.as_view(), name='buscar-usuario-por-user'),
    path('api/category', CategoriaViewSet.as_view({'post': 'create'}), name='create-usuario-pers'),
    path('api/category/<int:pk>', CategoriaViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='category-detail'),
    path('api/product', CursoViewSet.as_view({'get': 'list', 'post': 'create'}), name='product-list'),
    path('api/curso', CursoPublicViewSet.as_view({'get': 'list'}), name='curso-list'),
    path('api/product/<int:pk>', CursoViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='product-detail'),
]



