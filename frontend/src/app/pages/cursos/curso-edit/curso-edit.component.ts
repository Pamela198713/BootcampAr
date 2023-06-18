import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Categoria } from '../../../shared/interfaces/Categoria';
import { Curso } from '../../../shared/interfaces/Curso';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {

  cursoForm!: FormGroup;
  categorias: Categoria[] = [];
  CursoId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    const idParam = this.route.snapshot.paramMap.get('id');

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

    if (idParam) {
      const id = parseInt(idParam, 10);
      this.productsService.getById(id).subscribe({
        next: (data) => {
          this.CursoId = data.id;
          this.cursoForm.setValue({
            titulo: data.titulo,
            precio: data.precio,
            descripcion: data.descripcion,
            duracion: data.duracion,
            nivel: data.nivel,
            lenguajes: data.lenguajes,
            imagenes: data.imagenes,
            categorias: String(data.categorias)
          });
        }
      })
    }
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
    console.log(typeof(this.cursoForm.value.categorias));
    this.productsService.update(this.CursoId,cursoData).subscribe({
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

