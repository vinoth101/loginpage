import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  errorMessage: string = '';

  constructor(private router: Router) { }

  onLogin(username: string, password: string) {
    // Simulate a successful login process
    const success = true;  // Replace with actual login logic

    if (success) {
    
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Login failed. Please check your username and password.';
    }
  }
}
