import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../shared/interfaces/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getAll().subscribe({
      next: usuarios => {
        this.usuarios = usuarios;
      },
      error: error => {
        console.log('Error al obtener usuarios:', error);
      }
    }); 
  }

  editarUsuario(id: number, event: Event): void {
    event.preventDefault();
    this.router.navigate([`/dashboard/usuarios/${id}`]);
  }

  eliminarUsuario(id: number, event: Event): void {
    event.preventDefault();
    const confirmacion = confirm('¿Estás seguro de eliminar este curso?');
    if (confirmacion) {
      this.usuarioService.delete(id).subscribe({
        next:(data) => {
          this.obtenerUsuarios();
        }
      })
    }
  }

}
