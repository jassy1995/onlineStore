import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lists } from '../products'
import { CartServiceService } from '../cart-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  constructor(public route:ActivatedRoute) { }
  
  ngOnInit() {
  }
  products = lists;
 
  share(){
    window.alert('the product has been shared');
  }
  onNotify(){
    window.alert('you will be notify when the product go on sale');
  }
}

// public productId ;
// public products = []

  // public product = [
  //   {id:"1",name:"Tecno",description:"fast working",price:"200000"},
  //   {id:"2",name:"Geonee",description:"larger storage",price:"250000"},
  //   {id:"3",name:"Iphone",description:"working like a pc",price:"300000"},
  //   {id:"4",name:"Samsung",description:"very smart",price:"150000"},
  //   {id:"5",name:"Itel",description:"long life battery",price:"100000"},
  // ]






