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
        usuarioname:['',[]],
        email:['',[]],
        password:['',[]],
        confirmPassword:['',[]]
      });

      onSubmit(registroForm: FormGroup){
        const usuarioname = registroForm.value.usuarioname;
        const email = registroForm.value.email;
        const password = registroForm.value.password;
        const confirmPassword = registroForm.value.confirmPassword;
        

        
    //     const usuario: Usuario = {
    //       Nombre: usuarioname,
    //       Email: email,
    //       Password: password,
    //      // ConfirmPassword: confirmpassword
      
      
    //     };
  
    //     this.authService.register(usuario).subscribe({
    //       next:(respuesta) => {
    //   }

        
    // })
    }
  
    
  }

      
      
    


 
    
  

 
