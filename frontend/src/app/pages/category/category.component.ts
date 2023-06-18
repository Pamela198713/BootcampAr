import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Categoria } from '../../shared/interfaces/Categoria';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categorias: any[] = [];

  constructor(private productServices: ProductsService,
              private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.fetchCategorias();
  }

  fetchCategorias() {
    this.productServices.getAllCategorias().subscribe(
      categorias => this.categorias = categorias
    );
  }

  editarCateg(id: number, event: Event): void {
    event.preventDefault();
    this.router.navigate([`/dashboard/category/${id}`]); 
  }
  
  eliminarCateg(id: number, event: Event): void {
    event.preventDefault();
    const confirmacion = confirm('¿Estás seguro de eliminar este curso?');
    if (confirmacion) {
      this.productServices.deleteCateg(id).subscribe({
        next:(data) => {
          this.fetchCategorias();
        }
      })
    }
  }
}