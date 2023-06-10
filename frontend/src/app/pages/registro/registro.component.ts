import { Component} from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { Usuario } from 'src/app/shared/interfaces/Usuario';
import { Validators } from '@angular/forms';



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

    /*  registroForm=this.formBuilder.group({
        usuarioname:['',[]],
        email:['',[]],
        password:['',[]],
        confirmPassword:['',[]]
      });
    */
      registroForm : FormGroup = this.formBuilder.group({
        usuarioname:['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8)]],
        confirmPassword: ['',[Validators.required, Validators.minLength(8)]]
      })
    
      get Password(){
        return this.registroForm.get("password")
      }
      get Email(){
        return this.registroForm.get("email")
      }
      get Usuarioname(){
        return this.registroForm.get("usuarioname")
      }
      get ConfirmPassword(){
        return this.registroForm.get("confirmPassword")
      }

      onSubmit(registroForm: FormGroup){
        const usuarioname = registroForm.value.usuarioname;
        const email = registroForm.value.email;
        const password = registroForm.value.password;
        const confirmPassword = registroForm.value.confirmPassword;
        console.log(usuarioname,email,password,confirmPassword)

        const usuario: any = {
          username: usuarioname,
          email: email,
          password1: password
        };

  
        this.authService.register(usuario).subscribe({
          next:(respuesta) => {
            console.log(respuesta);
        }
      })

    }
  
    
  }

      
      
    


 
    
  

 
