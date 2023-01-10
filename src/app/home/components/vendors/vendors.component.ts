import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
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
        items: 6
      }
    },
    nav: false
  }
  
  vendors:any=[
    {imageUrl:"assets/img/vendor-1.jpg"},
    {imageUrl:"assets/img/vendor-2.jpg"},
    {imageUrl:"assets/img/vendor-3.jpg"},
    {imageUrl:"assets/img/vendor-4.jpg"},
    {imageUrl:"assets/img/vendor-5.jpg"},
    {imageUrl:"assets/img/vendor-6.jpg"}
  ]


}
