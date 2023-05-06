import Curso as curso

list_cursos = []

def opciones():
    print("CRUD de Cursos")
    print("-" * 50)
    print('Selecciona una opción:')
    print('[C]reate')
    print('[R]ead - Leer')
    print('[U]pdate - Actualizar')
    print('[D]elete  - Elimnar')
    print('[S]ALIR')
    

    
def run():
    opciones()
    
    selector = input()
    selector = selector.upper()
    
    
    while True:
        if selector == "C":
            print("CREAR CRUSO")
            print("-" * 50)
            #Agregar atributos
            titulo = input("Ingrese un titulo")
            precio = input("Ingrese el precio")
            descripcion = input("Ingrese la descripcion")
            duracion = input("Ingrese la duracion")
            nivel = input("Ingrese el nivel")
            imagenes = input("Ingrese la url de la imagen")
            lengujae = input("Ingrese el idioma")
            
            list_cursos.append(curso.Curso(titulo,precio,descripcion,duracion,nivel,imagenes,lengujae))
            
            print(curso)
            
            print("CURSO CREADO")
            
            selector = ""
            
        elif selector == "R":
            print("LEER CRUSO")
            print("-" * 50)
            
            for i in list_cursos:
                print(curso.titulo)
            #Crear un for para recorrer los atributos
            
            selector = ""
        
        elif selector == "U":
            print("ACTUALIZACION CURSO")
            print("-" * 50)
            
            idBuscardor= input("Ingresar el ID: ")
            
            selector = ""
            print("CURSO ACTUALIZADO")
            
        elif selector == "D":
            print("ELIMINAR CURSO")
            idBuscardor= input("Ingresar el ID: ")
            
            selector = ""
            print("CURSO ELIMINADO")
            
            
        elif selector == "S":
            break

run()

