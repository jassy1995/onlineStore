import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComplainComponent } from './complain/complain.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path:"",redirectTo:"/home",pathMatch:"full"},
  { path:"home",component:HomeComponent},
  { path:"product-list",component:ProductListComponent},
  //  { path:"product_alert",component:ProductAlertComponent},
  { path:"products/:id",component:ProductDetailsComponent},
  { path:"students",component:StudentsComponent,children:[
    { path:"boys",component:BoysComponent},
    { path:"girls",component:GirlsComponent},
    { path:"profile",component:ProfileComponent},
  ]},
  { path:"gallary",component:GalleryComponent,children:[
    { path:"aboutus",component:AboutUsComponent},
    { path:"complain",component:ComplainComponent},
  ]},
  { path:"**",component:NotFoundComponent}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
