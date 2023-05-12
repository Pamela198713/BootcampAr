from django.contrib import admin
from .models import Usuario, Categoria, Curso, Inscripcion, Leccion, Orden, OrdenDetalle, Factura

admin.site.register(Usuario)
admin.site.register(Categoria)
admin.site.register(Curso)
admin.site.register(Inscripcion)
admin.site.register(Leccion)
admin.site.register(Orden)
admin.site.register(OrdenDetalle)
admin.site.register(Factura)