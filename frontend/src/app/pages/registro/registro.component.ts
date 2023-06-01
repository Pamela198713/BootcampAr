import { Component} from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { Usuario } from 'src/app/shared/interfaces/Usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthServiceService
    ){}
   
      registroForm=this.formBuilder.group({
        nombre:['',[]],
        apellido:['',[]],
        email:['',[]],
        password:['',[]],
        celular:['',[]],
        direccion:['',[]],
        pais:['',[]],
        rol:['',[]]
      });

      onSubmit(registroForm: FormGroup){
        const nombre = registroForm.value.nombre;
        const apellido = registroForm.value.apellido;
        const email = registroForm.value.email;
        const password = registroForm.value.password;
        const telefono = registroForm.value.telefono;
        const direccion = registroForm.value.direccion;
        const pais = registroForm.value.pais;
        const id = registroForm.value.id;
        const rol = registroForm.value.rol;
        const foto = registroForm.value.foto;
        const perfil = registroForm.value.perfil;
        console.log(nombre, password);

        
  const usuario: Usuario = {
    Nombre: nombre,
    Apellido: apellido,
    Email: email,
    Password: password,
    Telefono: telefono,
    Direccion: direccion,
    Pais: pais,
    //atributos a debatir
    id: id,
    Rol: rol,
    Foto: foto,
    Perfil: perfil


  };
  
        this.authService.register(usuario).subscribe({
          next:(respuesta) => {
      }

        
    })
    }
  
    
  }

      
      
    


 
    
  

 
