function eliminar(){

    alert("Intentar con los siguientes valores correo: Agus_25@hotmail.com / contraseña: 123")
    var result = confirm("Esta seguro que quiere eliminar esta cuenta?");
    
    if (result) {
        var confirmacion_mail = prompt("Ingrese su correo electronico", "abc123@gmail.com")

        if(confirmacion_mail == Agus25.email){
            var confrimacion_pass = prompt("Ingrese ssu contraseña",)

            if(confrimacion_pass == Agus25.contraseña){
                alert("Cuenta Agus25 eliminada")
            }
            else{
                alert("Eliminacion de cuenta abortada")
            }

        }

        else if(confirmacion_mail == Raul36.email){
            var confrimacion_pass = prompt("Ingrese ssu contraseña",)

            if(confrimacion_pass == Raul36.contraseña){
                alert("Cuenta Raul36 eliminada")
            }
            else{
                alert("Eliminacion de cuenta abortada")
            }
        }

        else if(confirmacion_mail == Bri58.email){
            var confrimacion_pass = prompt("Ingrese ssu contraseña",)

            if(confrimacion_pass == Bri58.contraseña){
                alert("Cuenta Bri58 eliminada")
            }
            else{
                alert("Eliminacion de cuenta abortada")
            }
        }

        else if(confirmacion_mail == Manu99.email){
            var confrimacion_pass = prompt("Ingrese ssu contraseña",)

            if(confrimacion_pass == Manu99.contraseña){
                alert("Cuenta Manu99 eliminada")
            }
            else{
                alert("Eliminacion de cuenta abortada")
            }
        }

        else if(confirmacion_mail == Tom22.email){
            var confrimacion_pass = prompt("Ingrese ssu contraseña",)

            if(confrimacion_pass == Tom22.contraseña){
                alert("Cuenta Tom22 eliminada")
            }
            else{
                alert("Eliminacion de cuenta abortada")
            }
        }

        else{
            alert("Eliminacion de cuenta abortada")
        }

    }
    else {
        alert("Eliminacion de cuenta abortada");
    }

}

function actualizacion(){
    window.location.href = "./Login/update.html"
}