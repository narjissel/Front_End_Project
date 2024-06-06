import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {

  user: User = new User();

  constructor(private userService: UserService) { }
/*
  createUser() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log('User created successfully', data);
    });
  }
*/
}
