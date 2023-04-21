// login --> terminado
function login() {
  // Toma los valores enviados desde el html y los guarda en variables
  var reg = N_usuario_login.value;
  var pas = contraseña_login.value;

  // Mensajes
  let repUser = document.getElementById("rep_user")
  let repPass = document.getElementById("rep_pass");

  // login valido - usuarios predeterminados
  if (usuarios.includes(reg)) {
    if (reg == "Agus25") {
        if (Agus25.contraseña == pas) {
            repUser.append("Bienvenida Agus25");
            window.location.href = "./Perfil/Agus25.html"
        }
        else if (pas == "") {
            repPass.append("Ingresa una contraseña");
        } 
        else {
            repPass.append("Contraseña invalida");
        }
    }

    if (reg == "Raul36") {
        if (Raul36.contraseña == pas) {
            repUser.append("Bienvenida Raul36");
            window.location.href = "./Perfil/Raul36.html";
        } 
        else if (pas == "") {
            rep.append("Ingresa una contraseña");
        } 
        else {
            repPass.append("Contraseña invalida");
        }
    }

    if (reg == "Bri58") {
        if (Bri58.contraseña == pas) {
            repUser.append("Bienvenida Bri58");
            window.location.href = "./Perfil/Bri58.html";
      }
      else if (pas == "") {
        rep.append("Ingresa una contraseña");
      } else {
        repPass.append("Contraseña invalida");
      }
    }
    
    if (reg == "Manu99") {
      if (Manu99.contraseña == pas) {
        repUser.append("Bienvenida Manu99");
        window.location.href = "./Perfil/Manu99.html";
      } else if (pas == "") {
        rep.append("Ingresa una contraseña");
      } else {
        repPass.append("Contraseña invalida");
      }
    }

    if (reg == "Tom22") {
        if (Tom22.contraseña == pas) {
            repUser.append("Bienvenida Tom22");
            window.location.href = "./Perfil/Tom22.html";
        } 
        
        else if (pas == "") {
            repPass.append("Ingresa una contraseña");
        } 

        else {
            repPass.append("Contraseña invalida");
        }
      }
  }

  // errores en los campos
  else {
    if (reg == "") {
        repUser.append("campo usuario vacio");
    }

    if (pas == "") {
        repPass.append("campo contraseña vacio");
    }
  }
}

function profe(){
    alert("ingrese los siguienes nombres de usuarios /Agus25/Raul36/Bri58/Manu99/Tom22 - todas las contraseñas son 123")
}

function reguistro(){
  window.location.href = "register.html"
}
