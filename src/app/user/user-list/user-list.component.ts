import { Component ,NgModule,OnInit} from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Module } from 'module';
import { NgForm } from '@angular/forms';
import { UserCreateComponent } from '../user-create/user-create.component';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor,FormsModule,ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: User = new User();
  user: User = {
    id: 0,
    email: '',
    name: '',
    password: ''
  };


  userCreationStatus: string = '';


  constructor(private userService: UserService, ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });


  }

  onSubmit() {
    this.userService.createUser(this.user).subscribe(response => {
      console.log('User created:', response);
    });
  }
  
  createUser(): void {
    this.userService.registerUser(this.newUser).subscribe( 
   // this.userService.createUser(this.newUser).subscribe(
      user => {
        this.users.push(user);
        this.newUser = new User(); // Reset form
        this.userCreationStatus = 'User created successfully.';
      },
      error => {
        console.error('Error creating user:', error);
        this.userCreationStatus = 'Error creating user. Please try again.';
      }
    );
  }
  
}