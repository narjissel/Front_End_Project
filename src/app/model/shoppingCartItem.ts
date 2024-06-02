import {Product} from "./product";
import {ShoppingCart} from "./shoppingCart";

export class ShoppingCartItem{
  id : string = '';
  private product : Product = new Product();
  private quantity : number = 0;


  constructor() {
  }


  get _product(): Product {
    return this.product!;
  }

  set _product(value: Product) {
    this.product = value;
  }

  get _quantity(): number {
    return this.quantity;
  }

  set _quantity(value: number) {
    this.quantity = value;
  }

}
