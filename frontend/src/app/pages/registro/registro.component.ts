import { Component} from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthServiceService,
    private router: Router,
    private toastr: ToastrService
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
        password: ['',[Validators.required, Validators.minLength(8)]],
        confirmPassword: ['',[Validators.required, Validators.minLength(8)]]
      })
    
      get Password(){
        return this.registroForm.get("password")
      }
      get Usuarioname(){
        return this.registroForm.get("usuarioname")
      }
      get ConfirmPassword(){
        return this.registroForm.get("confirmPassword")
      }

      onSubmit(registroForm: FormGroup){
        const usuarioname = registroForm.value.usuarioname;
        const password = registroForm.value.password;
        const confirmPassword = registroForm.value.confirmPassword;

        const usuario: any = {"username":usuarioname,"password":password}; 
  
        this.authService.register(usuario).subscribe({
          next:(respuesta) => {
            this.toastr.success('Usuario registrado exitosamente');
            this.router.navigate(['/login']); 
        },
        error: (err) => {
          console.log(err);
          this.toastr.error('Hubo un error al registrar el usuario. Error: '+ err.message);
        }
      })

    }
  
    
  }

      
      
    


 
    
  

 
