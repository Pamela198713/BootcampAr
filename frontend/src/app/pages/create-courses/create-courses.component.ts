import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Categoria } from '../../shared/interfaces/Categoria';
import { Curso } from '../../shared/interfaces/Curso';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent {
  cursoForm!: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.cursoForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      duracion: ['', Validators.required],
      nivel: ['', Validators.required],
      lenguajes: ['', Validators.required],
      imagenes: ['', Validators.required],
      categorias: ['', Validators.required]
    });

    this.loadCategorias();
  }

  loadCategorias() {
    this.productsService.getAllCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  submitForm() {
    if (this.cursoForm.invalid) {
      return;
    }

    const cursoData: any = {
      titulo: this.cursoForm.value.titulo,
      precio: this.cursoForm.value.precio,
      descripcion: this.cursoForm.value.descripcion,
      duracion: this.cursoForm.value.duracion,
      nivel: this.cursoForm.value.nivel,
      lenguajes: this.cursoForm.value.lenguajes,
      imagenes: this.cursoForm.value.imagenes,
      categorias: [ this.cursoForm.value.categorias ]
    };

    this.productsService.insert(cursoData).subscribe({
      next: () => {
        this.toastr.success('Curso creado exitosamente');
        this.router.navigate(['/dashboard/cursos']); 
      },
      error:(err) => {
        this.toastr.error("No se ha podido crear el curso, error: " + err.message);
      }
    });
  }
  
}