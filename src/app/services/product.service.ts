import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable} from "rxjs";
import {ShoppingCart} from "../model/shoppingCart";
import {ShoppingCartItem} from "../model/shoppingCartItem";
import { map } from 'rxjs';
//import 'core-js/features/array/map';
import 'core-js';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private apiUrl = 'http://localhost:3000';

  cart : ShoppingCart = new ShoppingCart();

  constructor(private http : HttpClient) { }


  public getProducts():Observable<Array<Product>>{
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  
  public getProduct(productId:number):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
   
  }
 
 
/*
  public getImageUrls(): Observable<string[]> {
    return this.http.get<any>(`${this.apiUrl}/products/`).pipe(
      map((data: any) => data.products.map((product: any) => product.image))
    );
}*/

  addToCart(item : ShoppingCartItem ){
    console.log('service : add to cart');
    // Vérifier si un article avec le même produit, la même couleur et la même taille existe déjà
    const existingItemIndex = this.cart._items.findIndex(x => 
      x._product.id === item._product.id &&
      x.color === item.color &&
      x.size === item.size
    );
    

    if(this.isExisted( item)){
      console.log('finding item');
      let index = this.cart._items.findIndex(
        x => x._product.id == item._product.id
      );
      this.cart._items[index]._quantity += item._quantity;
    } else {
      console.log('pushing item');
      this.cart._items.push(item);
      this.cart._total++;
    }
    console.log(this.cart._items);
  }

  isExisted(item : ShoppingCartItem){
    let elem : ShoppingCartItem | undefined = this.cart._items.find(x => x._product.id == item._product.id);
    if(elem == undefined)
      return false;
    else
      return true;
  }

  deleteProduct(item: ShoppingCartItem) {
    let index = this.cart._items.findIndex(
      x => x._product.id == item._product.id
    );
    this.cart._items.splice(index,1);
  }

  saveCart(){
    console.log('service :  saving cart')
    this.cart._date = new Date();
    this.http.post<ShoppingCart>('http://localhost:3000/carts', this.cart).subscribe({
      next : result =>{
        console.log('cart : ' + result);
        this.cart =new ShoppingCart();
      },
      error : err => console.log('error : ' + err)
    });
  }



  public searchProducts(title: string): Observable<Array<Product>> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?title=${title}`);
  }
  

  

  // Méthode pour calculer le prix total du panier d'achat
  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cart._items) {
      totalPrice += item._quantity * item._product.price;
    }
    return totalPrice;
  }
  
  
}
