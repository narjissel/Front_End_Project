import {Product} from "./product";
import {ShoppingCart} from "./shoppingCart";

export class ShoppingCartItem{
  id : string = '';
  private product : Product = new Product();
  private quantity : number = 0;
  private _color: string;  // Ajouter ce champ
  private _size: string; 

  constructor() {
    this._color = '';
    this._size = '';
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

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }

}
