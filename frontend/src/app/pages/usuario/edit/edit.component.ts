import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../shared/interfaces/Usuario';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class UsuariosEditComponent implements OnInit{
  usuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = parseInt(idParam, 10);
      this.usuarioService.getById(id).subscribe({
        next: (data) => {
          console.log(data);
  
          this.usuarioForm = this.formBuilder.group({
            nombre: [data.nombre, Validators.required],
            apellido: [data.apellido, Validators.required],
            pais: [data.pais, Validators.required],
            rol: [data.rol, Validators.required],
            email: [data.email, Validators.required],
            telefono: [data.telefono, Validators.required],
            direccion: [data.direccion, Validators.required],
            foto: [data.foto, Validators.required],
            bio: [data.bio, Validators.required],
            fechaNacimiento: [data.fechaNacimiento, Validators.required],
            genero: [data.genero, Validators.required],
            ciudad: [data.ciudad, Validators.required]
          });
        }
      });
    } else {
      this.usuarioForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        pais: ['', Validators.required],
        rol: ['', Validators.required],
        email: ['', Validators.required],
        telefono: ['', Validators.required],
        direccion: ['', Validators.required],
        foto: ['', Validators.required],
        bio: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        genero: ['', Validators.required],
        ciudad: ['', Validators.required]
      });
    }

  }

  submitForm() {
  if (this.usuarioForm.invalid) {
  return;
  }

  const usuarioData: any = {
    nombre: this.usuarioForm.value.nombre,
    apellido: this.usuarioForm.value.apellido,
    pais: this.usuarioForm.value.pais,
    rol: this.usuarioForm.value.rol,
    email: this.usuarioForm.value.email,
    telefono: this.usuarioForm.value.telefono,
    direccion: this.usuarioForm.value.direccion,
    foto: this.usuarioForm.value.foto,
    bio: this.usuarioForm.value.bio,
    fecha_nacimiento: this.usuarioForm.value.fechaNacimiento,
    genero: this.usuarioForm.value.genero,
    ciudad: this.usuarioForm.value.ciudad,
    username: this.usuarioForm.value.email,
    password: this.usuarioForm.value.email
  };
  
  this.usuarioService.update(1,usuarioData).subscribe({
    next: () => {
      this.toastr.success('Usuario actualizado exitosamente');
      this.router.navigate(['/dashboard/usuarios']); 
    },
    error: error => {
      this.toastr.error('Error al actualizar el usuario' + error.message);
    }
   });
  }
}
