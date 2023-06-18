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

      this.authService.getUserLoggedId().subscribe(id => {
        this.visitante = this.authService.getRol(id).subscribe(
          (rol: string) => {
            this.visitante = rol
          }
        );
      });
      
    }

    


  // getRole() {
  //   this.logg = this.authService.getUserLoggedId()


  //   this.usuarioService.getById(this.logg).subscribe({
  //     next:(data) => {
  //       this.usuario = data


  //       this.authService.getRol(this.usuario.id).subscribe(
  //         (rol: string) => {
  //           // console.log("El ID es: " + this.authService.getUserLoggedId());
  //           this.visitante = rol

  //         }
  //       );

  //     }
  //   })


  // }
  

}


