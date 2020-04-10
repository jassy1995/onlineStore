import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  product_detail;
  constructor( public httt:HttpClient) { }
  public product = [
    {id:"1",name:"Tecno",description:"fast working",price:"200000"},
    {id:"2",name:"Geonee",description:"larger storage",price:"250000"},
    {id:"3",name:"Iphone",description:"working like a pc",price:"300000"},
    {id:"4",name:"Samsung",description:"very smart",price:"150000"},
    {id:"5",name:"Itel",description:"long life battery",price:"100000"},
  ]
}
