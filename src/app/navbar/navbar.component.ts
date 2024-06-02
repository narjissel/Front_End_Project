import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit{

 // searchProductTitle = "";


  constructor() {
  }
  
  ngOnInit(): void {}
}
