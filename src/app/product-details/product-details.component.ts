import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { list } from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
products;
  constructor(private route:ActivatedRoute) { }
  public product = [
    {id:"1",name:"Tecno",description:"fast working",price:"200000"},
    {id:"2",name:"Geonee",description:"larger storage",price:"250000"},
    {id:"3",name:"Iphone",description:"working like a pc",price:"300000"},
    {id:"4",name:"Samsung",description:"very smart",price:"150000"},
    {id:"5",name:"Itel",description:"long life battery",price:"100000"},
  ]

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.products = list [+ params.get('productId')];
    });
      
  }

}
