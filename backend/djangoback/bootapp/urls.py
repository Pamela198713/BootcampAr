"""
from . import views
"""
from dj_rest_auth.views import LoginView, LogoutView
from dj_rest_auth.registration.views import RegisterView
from django.urls import path, include
from .apiviews.product import CursoViewSet
from .apiviews.usuario import UsuarioViewSet
from rest_framework import routers


urlpatterns = [
    path('auth/register', RegisterView.as_view(), name='account_register'),
    path('auth/login', LoginView.as_view(), name='account_login'),
    path('auth/logout', LogoutView.as_view(), name='account_logout'),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration', include('dj_rest_auth.registration.urls')),
    path('api/usuario', UsuarioViewSet.as_view({'get': 'list', 'post': 'create'}), name='usuario'),
    path('api/usuario/<int:pk>', CursoViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='usuario-detail'),
    path('api/product', CursoViewSet.as_view({'get': 'list', 'post': 'create'}), name='product-list'),
    path('api/product/<int:pk>', CursoViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='product-detail'),
]



