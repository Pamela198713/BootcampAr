# Generated by Django 4.2.1 on 2023-05-12 15:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bootapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='categoria',
            table='categorias',
        ),
        migrations.AlterModelTable(
            name='curso',
            table='cursos',
        ),
        migrations.AlterModelTable(
            name='factura',
            table='facturas',
        ),
        migrations.AlterModelTable(
            name='inscripcion',
            table='inscripciones',
        ),
        migrations.AlterModelTable(
            name='leccion',
            table='lecciones',
        ),
        migrations.AlterModelTable(
            name='orden',
            table='ordenes',
        ),
        migrations.AlterModelTable(
            name='usuario',
            table='usuarios',
        ),
    ]