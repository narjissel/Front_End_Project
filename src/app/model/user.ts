import {UserType} from "./userType";
import {ShoppingCart} from "./shoppingCart";

export class User{
  private id : number= 0;
  private firstName : string = '';
  private lastName : string = '';
  private age : number = 0;
  private userType : UserType = UserType.Member;
  shoppingCarts: ShoppingCart[] = [];

  constructor() {
  }


  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  get _firstName(): string {
    return this.firstName;
  }

  set _firstName(value: string) {
    this.firstName = value;
  }

  get _lastName(): string {
    return this.lastName;
  }

  set _lastName(value: string) {
    this.lastName = value;
  }

  get _age(): number {
    return this.age;
  }

  set _age(value: number) {
    this.age = value;
  }

  get _userType(): UserType {
    return this.userType;
  }

  set _userType(value: UserType) {
    this.userType = value;
  }
}
