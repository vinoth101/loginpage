
  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
import { User } from '../User';
import { UserService } from '../service.service';
 
   
  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.css']
  })
  export class LoginpageComponent {
   
    user: User = {
      username: '',
      email: '',
      phone: '',
      password: ''
    }
   
    constructor(private userservive: UserService) { }
   
    login() {
      this.userservive.loginUser(this.user).subscribe(
        response => {
          console.log('Login successful', Response);
         
        },
        error => {
          console.error('Login failed', error);
         
        }
     
      );
    }
  }
   
   