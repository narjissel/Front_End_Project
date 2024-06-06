import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) {}

  register() {
    let bodyData = {
     
      email: this.email,
      name: this.name,
      password: this.password
    };
  
    const headers = { 'Content-Type': 'application/json' };
  
    this.http.post('http://localhost:8082/api/users/register', bodyData, { headers: headers, responseType: 'text' }).subscribe(
      (resultData: any) => {
        console.log(resultData);
        console.log("Registration successful");
        alert("Employee Registered Successfully");
      },
      error => {
        console.error("Error occurred during registration", error);
        alert("Registration failed. Please try again.");
      }
    );
  }
  
}
