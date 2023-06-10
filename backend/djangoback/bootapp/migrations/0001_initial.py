# Generated by Django 4.2.1 on 2023-06-10 19:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('descripcion', models.CharField(max_length=255)),
                ('imagen', models.CharField(max_length=200)),
                ('create_date', models.DateTimeField(auto_now_add=True)),
                ('update_date', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'categorias',
            },
        ),
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('descripcion', models.TextField()),
                ('duracion', models.IntegerField()),
                ('nivel', models.CharField(choices=[('principiante', 'Principiante'), ('intermedio', 'Intermedio'), ('avanzado', 'Avanzado')], max_length=50)),
                ('lenguajes', models.CharField(max_length=100)),
                ('imagenes', models.CharField(max_length=200)),
            ],
            options={
                'db_table': 'cursos',
            },
        ),
        migrations.CreateModel(
            name='Orden',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datos', models.TextField()),
                ('estado', models.CharField(max_length=50)),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('metodos_pago', models.CharField(choices=[('efectivo', 'Efectivo'), ('merca', 'Mercadopago'), ('transf', 'Transferencia Bancaria')], max_length=50)),
            ],
            options={
                'db_table': 'ordenes',
            },
        ),
        migrations.CreateModel(
            name='Perfil',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bio', models.TextField(blank=True)),
                ('fecha_nacimiento', models.DateField(blank=True, null=True)),
                ('genero', models.CharField(blank=True, max_length=20)),
                ('ciudad', models.CharField(blank=True, max_length=50)),
                ('pais', models.CharField(blank=True, max_length=50)),
            ],
            options={
                'db_table': 'perfiles',
            },
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=50)),
                ('apellido', models.CharField(blank=True, max_length=50)),
                ('pais', models.CharField(blank=True, max_length=50)),
                ('rol', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('telefono', models.CharField(max_length=15)),
                ('direccion', models.CharField(max_length=100)),
                ('foto', models.CharField(max_length=200)),
                ('perfil', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='usuario_perfil', to='bootapp.usuario')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'usuarios',
            },
        ),
        migrations.CreateModel(
            name='OrdenDetalle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('cantidad', models.IntegerField()),
                ('impuestos', models.DecimalField(decimal_places=2, max_digits=10)),
                ('subtotal', models.DecimalField(decimal_places=2, max_digits=10)),
                ('descuento', models.IntegerField()),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bootapp.curso')),
                ('orden', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bootapp.orden')),
            ],
        ),
        migrations.AddField(
            model_name='orden',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bootapp.usuario'),
        ),
        migrations.CreateModel(
            name='Leccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('contenido', models.TextField()),
                ('duracion', models.IntegerField()),
                ('tipo', models.CharField(choices=[('video', 'Video'), ('texto', 'Texto'), ('document', 'Documentos'), ('link', 'Enlaces')], max_length=10)),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bootapp.curso')),
            ],
            options={
                'db_table': 'lecciones',
            },
        ),
        migrations.CreateModel(
            name='Inscripcion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bootapp.curso')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bootapp.usuario')),
            ],
            options={
                'db_table': 'inscripciones',
            },
        ),
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField()),
                ('importe_total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('impuestos', models.DecimalField(decimal_places=2, max_digits=10)),
                ('descuentos', models.DecimalField(decimal_places=2, max_digits=10)),
                ('direccion_factura', models.CharField(max_length=100)),
                ('moneda', models.CharField(max_length=10)),
                ('numero_factura', models.CharField(max_length=50)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('orden', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bootapp.orden')),
            ],
            options={
                'db_table': 'facturas',
            },
        ),
        migrations.CreateModel(
            name='CursoCategoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bootapp.categoria')),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bootapp.curso')),
            ],
        ),
        migrations.AddField(
            model_name='curso',
            name='categorias',
            field=models.ManyToManyField(through='bootapp.CursoCategoria', to='bootapp.categoria'),
        ),
    ]
