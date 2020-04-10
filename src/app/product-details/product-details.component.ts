import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { list } from '../products'
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  [x: string]: any;

  constructor(private route:ActivatedRoute,public service:CartServiceService) { }
public  products;
public productId;
  // public product = [
  //   {id:"1",name:"Tecno",description:"fast working",price:"200000"},
  //   {id:"2",name:"Geonee",description:"larger storage",price:"250000"},
  //   {id:"3",name:"Iphone",description:"working like a pc",price:"300000"},
  //   {id:"4",name:"Samsung",description:"very smart",price:"150000"},
  //   {id:"5",name:"Itel",description:"long life battery",price:"100000"},
  // ]

  ngOnInit() {
    // this.route.paramMap.subscribe(params=>{
    // this.product = list [+ params.get('productId')];
    // });
    this.productId=this.actRout.snapshot.params.productId;
    let thisProduct=this.service.product.filter(s=> s.id==this.productId);
    this.products=thisProduct[0]
      
  }

}
