import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Categoria } from '../../shared/interfaces/Categoria';
import { Curso } from '../../shared/interfaces/Curso';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent {
  categoriaForm: FormGroup;

  constructor(private fb: FormBuilder, private productsService: ProductsService,
              private router: Router, private toastr: ToastrService) {
    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.categoriaForm.valid) {
      const categoriaData: any = {
        nombre: this.categoriaForm.value.nombre,
        descripcion: this.categoriaForm.value.descripcion,
        imagen: this.categoriaForm.value.imagen
      };



      this.productsService.insertCategory(categoriaData).subscribe({
        next: () => {
          this.toastr.success('Categoria creada exitosamente');
          this.router.navigate(['/dashboard/category']); 
        },
        error:(err) => {
          this.toastr.error("No se ha podido crear la categoria, error: " + err.message);
        }
      });
    }
  }
}
