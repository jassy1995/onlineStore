import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { lists } from '../products'
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route:ActivatedRoute,private service:CartServiceService) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
    this.product = lists[+ params.get('productId')];
    });   
  }
  addToCart(product){
    this.service. addToCart(product);
    window.alert('your product has been added to the cart!');
     }


}



