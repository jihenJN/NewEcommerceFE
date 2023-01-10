import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrouselComponent } from './components/crousel/crousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { ProductsComponent } from './components/products/products.component';
import { OffersComponent } from './components/offers/offers.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { HomeComponent } from './home.component';
import { CarouselModule} from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CrouselComponent,
    CategoriesComponent,
    FeaturedComponent,
    ProductsComponent,
    OffersComponent,
    VendorsComponent,
    HomeComponent,
   
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    
  ],
  exports:[
    CrouselComponent,
    CategoriesComponent,
    FeaturedComponent,
    ProductsComponent,
    OffersComponent,
    VendorsComponent,
 
  ],

})
export class HomeModule { }
