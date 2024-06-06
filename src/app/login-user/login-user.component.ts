import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from './login-user'; // Importez le modèle LoginRequest

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient) { }

  login() {
    // Créer une instance de la classe de modèle de requête de connexion
    const loginRequest = new LoginRequest(this.email, this.password);

    // Envoyer la requête de connexion au backend
    this.http.post<any>('http://localhost:8082/api/users/login', loginRequest).subscribe(
      (response: any) => {
        console.log(response);
        // Rediriger vers une page d'accueil si la connexion est réussie
        this.router.navigateByUrl('/home');
      },
      (error: any) => {
        console.error(error);
        // Afficher un message d'erreur si la connexion échoue
        alert("Invalid email or password");
      }
    );
  }
}
