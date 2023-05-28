import { Component} from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder
    ){
      this.registroForm=this.formBuilder.group({
        nombre:['',[]],
        apellido:['',[]],
        email:['',[]],
        contraseña:['',[]],
        confirmarContraseña:['',[]],
        telefono:['',[]],
        pais:['',[]],
        foto:['',[]]
      });
    }
 
    
  }
 
