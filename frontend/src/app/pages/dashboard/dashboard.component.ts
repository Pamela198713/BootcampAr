import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/interfaces/Usuario';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  visitante: any;
  estadisticas: any;
  logg:any;
  usuario?: Usuario;



  constructor(
    private authService: AuthServiceService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    if(this.visitante == null || this.visitante == undefined){
      this.visitante = 1
    }
    this.getRole()

  }


  getRole() {
    this.logg = this.authService.getUserLoggedId()
    console.log(this.logg)

    this.usuarioService.getById(this.logg).subscribe({
      next:(data) => {
        this.usuario = data
        console.log("este es el id:", this.usuario.id)

        this.authService.getRol(this.usuario.id).subscribe(
          (rol: string) => {
            // console.log("El ID es: " + this.authService.getUserLoggedId());
            this.visitante = rol
            console.log("Este es el rol del visitante" , this.visitante)
          }
        );

      }
    })


    
  }
  
  


}


