import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from '../service.service';
import { User } from '../User';
@Component({
  selector: 'app-registerpage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css'
})
export class RegisterpageComponent {
  constructor(private service:UserService){}
user:User={username:"",password:"",
    email:"",
    phone:""};
    errorMessage: string = '';

    createReg():void{
      this.service.registerUser(this.user).subscribe((registerUser) => {
this.user={username:"",password:"",
  email:"",
  phone:""};
      })
    }

}

