import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/shared/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthServiceService } from 'src/app/auth/auth-service.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  usuario?: Usuario;
  rol: any;


  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10) - 1;
      this.usuarioService.getById(id).subscribe({
        next: (data) => {
          this.usuario = data
          if (this.usuario.rol == "1") {
            this.rol = "Estudiante"
          }
          else {
            this.rol = "Administrador"
          }
          console.log(this.usuario);
        }
      });
    };

  }
}



