import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NarbarComponent } from './narbar/narbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Router } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComplainComponent } from './complain/complain.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NarbarComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    StudentsComponent,
    BoysComponent,
    GirlsComponent,
    GalleryComponent,
    AboutUsComponent,
    ComplainComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // RouterModule.forRoot([
    //   {path:'',component:ProductListComponent},
      
    // ])
  


  
  ],
  providers: [
    AppComponent,
    NarbarComponent,
    ProductListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
