from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class UserRegisterForm(UserCreationForm):
    nombre = forms.CharField(max_length=50)
    apellido = forms.CharField(max_length=50)
    pais = forms.CharField(max_length=50)
    telefono = forms.CharField(max_length=15)
    direccion = forms.CharField(max_length=100)
    email = forms.EmailField()
    password1 = forms.CharField(label='Contraseña', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirmar Contraseña', widget=forms.PasswordInput)
    
    class Meta:
        model = User
        fields = ['username', 'nombre', 'apellido', 'pais', 'telefono', 'direccion', 'email', 'password1', 'password2']
        help_texts = {k:"" for k in fields}
        