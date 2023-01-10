import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CarouselProductsComponent } from './components/carousel-products/carousel-products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselProductsComponent
   ,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports:
  [
    HeaderComponent,
    FooterComponent,
    CarouselProductsComponent
  ],
})
export class SharedModule { }
