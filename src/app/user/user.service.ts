import { Injectable } from '@angular/core';
//import { User } from '@auth0/auth0-angular';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8082/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
/*
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
*/
createUser(user: User): Observable<User> {
  return this.http.post<User>(`${this.apiUrl}/creat`, user);
}



  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }
}
