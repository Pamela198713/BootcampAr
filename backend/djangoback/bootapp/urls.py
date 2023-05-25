from django.urls import path
from . import views
from dj_rest_auth.views import LoginView, LogoutView
from dj_rest_auth.registration.views import RegisterView
from rest_framework import routers
from .views.product_create import ProductCreate

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='account_register'),
    path('auth/login/', LoginView.as_view(), name='account_login'),
    path('auth/logout/', LogoutView.as_view(), name='account_logout'),
    path('product/create/', ProductCreate.as_view(), name='product_create'),
]

router = routers.DefaultRouter()

# router.register('api/bootapp', CursoViewSet , 'bootapp')

urlpatterns = router.urls

