import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/shared/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  usuario?: Usuario;
 
 
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam){
    const id = parseInt(idParam, 10);
    this.usuarioService.getById(id).subscribe({
      next:(data) => {
      this.usuario = data
      console.log(this.usuario);
     }
    });
    };

  }
}



