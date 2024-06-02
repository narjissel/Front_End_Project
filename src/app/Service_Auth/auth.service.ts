import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN'
  private logeedUser? : String ;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false)

  private http = inject(HttpClient);


  constructor() { }

  login(user:{
    email : string , password : string
  }): Observable<any> {
      return this.http
      .post('https://api.escuelajs.co/api/v1/auth/login', user)
      .pipe(tap((tokens: any) => this.doLoginUser(user.email , tokens.access_token))
      );
  }

  private doLoginUser(email: string , token : any){
    this.logeedUser = email;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt : string) {
    localStorage.setItem(this.JWT_TOKEN , jwt);
  }
  
  logout(){
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentAuthUser(){
    //let token = localStorage.getItem(this.JWT_TOKEN);
    return this.http.get('https://api.escuelajs.co/api/v1/auth/profile', 
    );
  }

  isLoggedIn(){
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

}
