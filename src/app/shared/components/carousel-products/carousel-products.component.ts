import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.css']
})
export class CarouselProductsComponent {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
   
  products:any = [
    { name: "camera",photo: "assets/img/product-1.jpg" , price:"$800.00"},
    { name: "T-shirt",photo: "assets/img/product-2.jpg" , price:"$50.00"},
    { name: "Abat-jour",photo: "assets/img/product-3.jpg" , price:"$150.00"},
    { name: "Baskets",photo: "assets/img/product-4.jpg" , price:"$100.00"},

  ];


}
