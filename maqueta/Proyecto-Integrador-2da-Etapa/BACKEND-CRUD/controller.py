import io
import Usuario as user

list_usuarios = []

def mostrar_opciones():
    print('CRUD EJEMPLO')
    print('*' * 50)
    print('Selecciona una opción:')
    print('[C]reate')
    print('[R]ead - Leer')
    print('[U]pdate - Actualizar')
    print('[D]elete  - Elimnar')
    print('[S]ALIR')

def run():

    mostrar_opciones()

    command = input()
    command = command.upper()

    while True:
        if command == 'C':
            print("CREACION DE USUARIO")
            print('*' * 50)

            id_usuario = input("Ingresa el id:")
            nombre = input("Ingrese el nombre:")
            apellido = input("Ingrese el apellido:")
            email = input("Ingrese el email:")
            edad = input("Ingrese el edad:")
            username = input("Ingrese el username:")
            contraseña = input("Ingrese el contraseña:")
            foto = input("Ingrese URL de la foto:")
            telfijo = input("Ingrese el telfijo:")
            celular = input("Ingrese el celular:")
            direccion = input("Ingrese el direccion:")
            pais = input("Ingrese el pais:")
            ciudad = input("Ingrese el ciudad:")

            list_usuarios.append(user.Usuario(id_usuario,nombre,apellido,email,edad,username,contraseña,foto,telfijo,celular,direccion,pais,ciudad))

            print(user)

            command = ""

        elif command == 'R':
            print("IMPRIMIENDO TODOS LOS CLIENTES")
            print('*' * 50)

            for i in list_usuarios:
                print(i.id,i.nombre,i.apellido,i.emial,i.edad,i.username,i.contraseña,i.foto,i.telfijo,i.celular,i.direccion,i.pais,i.ciudad)
            
            command = ""

        elif command == 'U':
            print("ACTUALIZACION")
            print('*'*50)
            idBuscador = input("Ingrese el ID:")

            if idBuscador == i.id:
                user.nombre = input("ingresa un nuevo nombre")
                user.apellido = input("ingresa un nuevo apellido")
                user.email = input("ingresa un nuevo email")
                user.edad = input("ingresa un nuevo edad")

                command = ""

        
        elif command == 'D':
            idBuscador = input("Ingrese el DNI")

            if idBuscador == user.id:
                del Usuario

                command = ""

                print("Usuario eliminado")

        elif command == 'S':
            io._exit(1)

        else:
            run()

run()