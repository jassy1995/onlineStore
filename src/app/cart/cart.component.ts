import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { lists } from '../products'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  constructor(private service:CartServiceService) { }

  ngOnInit() {
    this.items = this.service.getItems();
  }
  

}
