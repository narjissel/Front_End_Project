import {Product} from "./product";
import {ShoppingCartItem} from "./shoppingCartItem";
import {useradmin} from "./useradmin";
import { UserType } from "./userType";

export class ShoppingCart{
  private id : string = "1";
  private total : number = 0;
  private user : useradmin = new useradmin();
  private date : Date = new Date;
  private items: Array<ShoppingCartItem> = [];


  constructor() {
  }

  get _id(): string {
    return this.id;
  }

  set _id(value: string) {
    this.id = value;
  }

  get _total(): number {
    return this.total;
  }

  set _total(value: number) {
    this.total = value;
  }

  get _user(): useradmin {
    return this.user;
  }

  set _user(value:useradmin) {
    this.user = value;
  }

  get _date(): Date {
    return this.date;
  }

  set _date(value: Date) {
    this.date = value;
  }

  get _items():Array<ShoppingCartItem> {
    return this.items;
  }

  set _items(items: Array<ShoppingCartItem>){
    this.items = items;
  }
}
