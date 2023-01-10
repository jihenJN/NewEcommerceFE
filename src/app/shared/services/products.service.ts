import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAll() {
    //return this.http.get<Product[]>("http://localhost:8080/services/categorydb/api/products");
    return this.http.get<Product[]>("http://localhost:8085/api/products");
  }

  create(payload: Product) {
    return this.http.post<Product>('http://localhost:8085/api/products', payload);
  }
}
