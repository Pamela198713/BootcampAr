import { Injectable } from '@angular/core';
import { ItemCarrito } from '../shared/interfaces/ItemCarrito';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

    private cartItems: ItemCarrito[] = [];
 
    constructor() { }

    getItems(): any[] {
      this.cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') ?? '') : [];
      return this.cartItems;
    }

    setItems(items: any[]) {
      this.cartItems = items;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }

    addItem(item: any) {
      const existingItem = this.cartItems.find((i: any) => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({... item, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }

    removeItem(item: any) {
      const index = this.cartItems.findIndex((i: any) => i.id === item.id);

      if (index !== -1) {
        this.cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    }

    clearCart() {
      this.cartItems = [];
      localStorage.removeItem('cart');
    }

    updateItemQuantity(item: any, quantity: number) {
      const existingItem = this.cartItems.find((i: any) => i.id === item.id);
  
      if (existingItem) {
        existingItem.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    }
  
  }
 