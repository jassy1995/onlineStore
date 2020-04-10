import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path:"",redirectTo:"/product-list",pathMatch:"full"},
  { path:"home",component:HomeComponent},
  { path:"product-list",component:ProductListComponent},
  { path:"products/:productId",component:ProductDetailsComponent},
   { path:"product_alert",component:ProductAlertComponent},
   {path:"cart",component:CartComponent},
  { path:"**",component:NotFoundComponent}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
