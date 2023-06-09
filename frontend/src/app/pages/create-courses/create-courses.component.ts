import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent {
  
  constructor(private formBuilder: FormBuilder) {
  }
  
    cursoForm = this.formBuilder.group({  
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    duracion: ['', Validators.required],
    nivel: ['', Validators.required],
    lenguaje: ['', Validators.required],
    imagenes: [''],
    categoria: ['',Validators.required]
  });

  onSubmit(cursoForm: FormGroup) {
     
      const titulo = cursoForm.value.titulo;
      const descripcion = cursoForm.value.descripcion;
      const precio = cursoForm.value.precio;
      const duracion = cursoForm.value.duracion;
      const nivel = cursoForm.value.nivel;
      const lenguaje = cursoForm.value.lenguaje;
      const imagenes = cursoForm.value.imagenes;
      const categoria = cursoForm.value.categoria;
      console.log(titulo, descripcion, precio, duracion, nivel, lenguaje, imagenes, categoria);
  }
  
}