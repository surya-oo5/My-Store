import { Injectable } from '@angular/core';
import { products } from '../products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = products;
 
  constructor() { }

    items: Product[] = [];

    addToCart(Product: Products) {
        this.items.push(Product);
      }
    
      getItems() {
        return this.items;
      }
    
      clearCart() {
        this.items = [];
        return this.items;

 
      }
      }
