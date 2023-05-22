from django.urls import path
from . import views
from django.contrib.auth.views import LoginView, LogoutView
from rest_framework import routers
from .api import CursoViewSet

urlpatterns = [
    path('feed/', views.feed, name='feed'),
    path('register/', views.register, name='register'),
    path('login/', LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', LogoutView.as_view(template_name='logout.html'), name='logout')
]

router = routers.DefaultRouter()

router.register('api/bootapp', CursoViewSet , 'bootapp')

urlpatterns = router.urls

