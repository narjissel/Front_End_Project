import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { User } from '../user/user';
import { useradmin } from '../model/useradmin';
import { stock_product } from '../stock-product/stock_product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8082/api/users');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  
  

  getUserAdmin(): Observable<useradmin[]> {
    return this.http.get<useradmin[]>('http://localhost:3000/users');
  }
}
