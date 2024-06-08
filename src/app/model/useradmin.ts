import {UserType} from "./userType";
import {ShoppingCart} from "./shoppingCart"
export class useradmin {
  private _id: number = 0;
  private _firstName: string = '';
  private _lastName: string = '';
  private _age: number = 0;
  private _userType: UserType = UserType.Member;
  shoppingCarts: ShoppingCart[] = [];

  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get age(): number {
    return this._age;
  }

  get userType(): UserType {
    return this._userType;
  }
}
