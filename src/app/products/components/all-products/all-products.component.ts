import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})

export class AllProductsComponent implements OnInit {

  allproducts ! : Product[];
  products  : Product[] = [];
  constructor(private productsService:ProductsService) { }
  ngOnInit() {

    this.get();
  }
  get() {
    this.productsService.getAll().subscribe((data) => {
      this. allproducts = data;
   console.log(data);
    });
  }
}