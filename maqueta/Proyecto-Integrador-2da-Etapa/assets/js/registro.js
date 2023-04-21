function registro(){

    //Guarda repuestas del input
    let nombre = ingresar_nombre.value
    let apellido = ingresar_apellido.value
    let email = ingresar_mail.value
    let nombre_usuario = ingresar_usuario.value
    let contraseña = ingresar_contraseña.value
    let Ccontraseña = confirmar_contraseña.value
    

    //Mensajes de campos
    let msj_nombre = document.getElementById("Nr_feedback")
    let msj_apellido = document.getElementById("Ap_feedback")
    let msj_email = document.getElementById("Email_respuesta")
    let msj_nombre_usuario = document.getElementById("Nu_feedback")
    let msj_contraseña = document.getElementById("Contraseña_respuesta")
    let msj_contraseña_confirmada = document.getElementById("CC_feedback")

    


    //Verificacion los campos
    if(nombre == ""){
        msj_nombre.append("Campo nombre vacio")
    }
    else if(apellido == ""){
        msj_apellido.append("Campo apellido vacio")
    }
    else if(email == ""){
        msj_email.append("Campo email vacio")
    }
    else if(nombre_usuario == ""){
        msj_nombre_usuario.append("Campo nombre_usuario vacio")
    }
    else if(contraseña == ""){
        msj_contraseña.append("Campo contraseña vacio")
    }
    else if(Ccontraseña == ""){
        msj_contraseña_confirmada.append("Campo contraseña vacio")
    }

    //Verificacion nombre de usuario existente
    if(usuarios.includes(nombre_usuario)){
        msj_nombre_usuario.append("Nombre de usuario ya existente")
    }

    else if(!usuarios.includes(nombre_usuario)){
        //confirma que las contraseñas sean iguales y que el campo no este vacio

        // Se ejecuta si las contraseñas estan diferentes
        if(contraseña_registro_confirmada.value != contraseña){
            alert("contraseñas diferentes")

            if(contraseña_registro_confirmada.value == contraseña & contraseña != ""){
                usuarios.push(nombre_usuario)
                usuarios.push(nombre)
                usuarios.push(apellido)
                usuarios.push(email)
                usuarios.push(contraseña)
                alert("Usuario registrado")
            }
        }
    }
}