import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stock_product } from './stock_product';

@Injectable({
  providedIn: 'root'
})
export class StockProductService {

  private apiUrl = 'http://localhost:8082/api/products';
  
   // Endpoint de votre backend Spring Boot

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<stock_product[]> {
    return this.http.get<stock_product[]>(this.apiUrl);
  }

  addProduct(product: stock_product): Observable<stock_product> {
    return this.http.post<stock_product>(this.apiUrl, product);
  }

  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }
  
  
 

}
