from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
from django.utils.crypto import get_random_string

def get_random_string_default():
    return get_random_string(25)

class Usuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=50, blank=True)
    apellido = models.CharField(max_length=50, blank=True)
    pais = models.CharField(max_length=50, blank=True)
    rol = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15)
    direccion = models.CharField(max_length=100)
    foto = models.CharField(max_length=200)
    perfil = models.OneToOneField('self', on_delete=models.CASCADE, null=True, blank=True, related_name='usuario_perfil')

    class Meta:
        db_table = 'usuarios'

class Perfil(models.Model):
    bio = models.TextField(blank=True)
    fecha_nacimiento = models.DateField(null=True, blank=True)
    genero = models.CharField(max_length=20, blank=True)
    ciudad = models.CharField(max_length=50, blank=True)
    pais = models.CharField(max_length=50, blank=True)

    class Meta:
        db_table = 'perfiles'

class Categoria(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=255)
    imagen =  models.CharField(max_length=200)
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nombre
    
    class Meta:
        db_table = 'categorias'


class Curso(models.Model):
    NIVELES_CHOICES = (
        ('principiante', 'Principiante'),
        ('intermedio', 'Intermedio'),
        ('avanzado', 'Avanzado'),
    )

    titulo = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.TextField()
    duracion = models.IntegerField()
    nivel = models.CharField(max_length=50, choices=NIVELES_CHOICES)
    lenguajes = models.CharField(max_length=100)
    imagenes = models.CharField(max_length=200)
    categorias = models.ManyToManyField(Categoria, through='CursoCategoria')

    def __str__(self):
        return self.titulo
    class Meta:
        db_table = 'cursos'


class CursoCategoria(models.Model):
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)


class Inscripcion(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)

    class Meta:
        db_table = 'inscripciones'


class Leccion(models.Model):
    TIPOS_CHOICES = (
        ('video', 'Video'),
        ('texto', 'Texto'),
        ('document', 'Documentos'),
        ('link', 'Enlaces'),
    )

    titulo = models.CharField(max_length=100)
    contenido = models.TextField()
    duracion = models.IntegerField()
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=10, choices=TIPOS_CHOICES)

    class Meta:
        db_table = 'lecciones'


class Orden(models.Model):
    id = models.AutoField(primary_key=True)
    METODOS_PAGO_CHOICES = (
        ('efectivo', 'Efectivo'),
        ('merca', 'Mercadopago'),
        ('transf', 'Transferencia Bancaria'),
    )

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    datos = models.TextField()
    estado = models.CharField(max_length=50)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    metodos_pago = models.CharField(max_length=50, choices=METODOS_PAGO_CHOICES)
    def __str__(self):
        return self.estado
    
    class Meta:
        db_table = 'ordenes'


class OrdenDetalle(models.Model):
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad = models.IntegerField()
    impuestos = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    descuento = models.IntegerField()
    orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)


class Factura(models.Model):
    id = models.AutoField(primary_key=True)
    fecha = models.DateTimeField()
    importe_total = models.DecimalField(max_digits=10, decimal_places=2)
    impuestos = models.DecimalField(max_digits=10, decimal_places=2)
    descuentos = models.DecimalField(max_digits=10, decimal_places=2)
    direccion_factura = models.CharField(max_length=100)
    moneda = models.CharField(max_length=10)
    numero_factura = models.CharField(max_length=50)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    orden = models.ForeignKey(Orden, on_delete=models.CASCADE)

    def __str__(self):
        return self.numero_factura
    
    class Meta:
        db_table = 'facturas'

