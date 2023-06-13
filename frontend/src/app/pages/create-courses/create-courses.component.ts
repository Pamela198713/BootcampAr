import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/shared/interfaces/Curso';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent {
  product?: Curso ;
  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router,
              private toastr: ToastrService
             ){}

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

       this.product = {
        "id": 0,  
        "titulo": titulo,
        "descripcion": descripcion,
        "precio": precio,
        "duracion": 10,
        "nivel": nivel,
        "lenguajes": lenguaje,
        "imagenes": "https://www.imagenes.com/imagen.jpg",
        "categorias": [1]
      }

      this.productsService.insert(this.product).subscribe({
        next: () => {
          this.toastr.success('Curso creado exitosamente');
          this.router.navigate(['/createCourse']); 
        },
        error:(err) => {
          this.toastr.error("No se ha podido crear el curso, error: " + err.message);
        }
      });
      
  }
  
}