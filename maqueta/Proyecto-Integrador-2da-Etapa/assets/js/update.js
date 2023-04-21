
function update(){

    var _nombre = up_nombre.valeu
    var _apellido = up_apellido.valeu
    var _email = up_email.valeu
    
    if(_nombre == true || _nombre !== ""){
        alert("No se puede repetir valores antiguos")

    }
    else if(_apellido == true || _apellido !== ""){
        alert("No se puede repetir valores antiguos")
    }
    else if(_email == true || _email !== ""){
        alert("No se puede repetir valores antiguos")
    }

    if(_nombre !== ""  || _apellido !== "" || _email !== "") {
        alert("Algunos campos estan repetidos")
    }
    else{
        alert("tus datos fueron actualizados")
    }
    

    

}

function login(){
    window.location.href = "login.html"
}