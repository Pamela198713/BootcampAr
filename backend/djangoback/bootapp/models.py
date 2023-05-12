from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UsuarioManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El email debe ser proporcionado')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)
    

class Usuario(AbstractBaseUser):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    pais = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    contraseña = models.CharField(max_length=100)
    rol = models.CharField(max_length=20)
    telefono = models.CharField(max_length=15)
    direccion = models.CharField(max_length=100)
    foto = models.ImageField(upload_to='usuarios')
    perfil = models.ImageField(upload_to='perfiles')

    objects = UsuarioManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nombre', 'apellido']

    def __str__(self):
        return self.email
    class Meta:
        db_table = 'usuarios'


class Categoria(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=255)
    imagen = models.ImageField(upload_to='categorias')
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
    imagenes = models.ImageField(upload_to='cursos')
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
    METODOS_PAGO_CHOICES = (
        ('efectivo', 'Efectivo'),
        ('merca', 'Mercadopago'),
        ('transf', 'Transferencia Bancaria'),
    )

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    datos = models.TextField()
    estado = models.CharField(max_length=50)
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

