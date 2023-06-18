import { Component } from '@angular/core';
import { ItemCarrito } from 'src/app/shared/interfaces/ItemCarrito';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  listaItemCarrito: ItemCarrito[] | undefined  ;
  totalPrice: number = 0;

  items = [
    {
      image: "",
      name: "",
      title: "",
      description: "",
      price: 0,
      id: 0,
      quantity: 0,
      total: 0
    }    
  ]
 
 
  ngOnInit(): void{
    let carritoStorage = localStorage.getItem("carrito") as string;


    let carrito  = JSON.parse(carritoStorage);
    this.listaItemCarrito=carrito
    this.items= [
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png",
        name: "Python",
        title: "Curso de Python",
        description: "El mejor curso de Python del Ing. Leonardo",
        price: 300,
        id: 1,
        quantity: 2,
        total: 11225
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png",
        name: "Python",
        title: "Curso de Python",
        description: "El mejor curso de Python del Ing. Leonardo",
        price: 300,
        id: 1,
        quantity: 2,
        total: 11225
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_Z3IvXOP1_y8pMxO4NrunG96_EKg2qzNmC9J8saKjIY69xCKLY9gchKrCeKMmV-LN4E&usqp=CAU",
        name: "Angular",
        title: "Curso de Angular",
        description: "El mejor curso de Angular 15 por Ing. Yuliana",
        price: 300,
        id: 1,
        quantity: 2,
        total: 11225
      }
    ]

    this.calculateTotalPrice();
  }

  updateQuantity(event: Event, item: any) {
    const target = event.target as HTMLInputElement;
    item.quantity = Number(target.value);

    this.calculateTotalPrice()
  }

  calculateTotalPrice() {
    this.totalPrice = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.calculateTotalPrice();
  }

  }
  






