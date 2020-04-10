import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';



@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items = [];
  constructor( public httt:HttpClient) { }

  addToCart(product){
 this.items.push(product)
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  delete(index){
    this.items.splice(index,1);
  }
  
}
