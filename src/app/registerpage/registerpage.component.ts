import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registerpage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css'
})
export class RegisterpageComponent {
  errorMessage: string = '';

  // Example array to store registered users (in a real application, you would use a service to handle this)
  private users: { username: string, password: string, email: string, phone: string }[] = [];

  constructor(private router: Router) {}

  onRegister(username: string, password: string, email: string, phone: string) {
    if (this.users.find(user => user.username != username)) {
      this.errorMessage = 'Registration failed. Username might already be taken.';
    } else {
      this.users.push({ username, password, email, phone });
      this.router.navigate(['/login']);  // Redirect to the login page after successful registration
    }
  }
  }

