import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  } from "module";
import { CartComponent } from './carts/components/cart/cart.component';
import { CheckoutComponent } from './carts/components/checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
const routes: Routes = [
  {path :"contact", component:ContactComponent},
  {path :"products", component:AllProductsComponent},
  {path :"details", component:ProductsDetailsComponent},
  {path :"cart", component:CartComponent},
  {path :"checkout", component:CheckoutComponent},
  {path :"", component:HomeComponent},
  {path :"**",redirectTo:"", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
