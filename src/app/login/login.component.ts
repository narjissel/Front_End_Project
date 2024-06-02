import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../Service_Auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
/*
  redirectToLogin(): void {
    this.router.navigateByUrl('/login');
  }
*/
email = '';
password='';
authService = inject(AuthService);
router = inject(Router);

login(event :  Event){
  event.preventDefault();
  console.log(`Login: ${this.email}/ ${this.password}`);
  this.authService.login({
    email : this.email,
    password : this.password,
  }).subscribe(()=>{
    alert('Login success !');
    this.router.navigate(['/']);
  });
}

}
