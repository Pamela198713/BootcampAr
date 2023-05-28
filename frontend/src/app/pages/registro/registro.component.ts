import { Component} from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm:FormGroup;
  
  
  

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthServiceService
    ){
      this.registroForm=this.formBuilder.group({
        nombre:['',[]],
        apellido:['',[]],
        email:['',[]],
        password:['',[]],
        celular:['',[]],
        direccion:['',[]],
        pais:['',[]],
        rol:['',[]]
      });
    }
    

    llamarRegistro(){
      this.authService.register()
      
      
    }


 
    
  } 

 
