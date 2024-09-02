import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router'; // Import RouterModule



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,LoginpageComponent,FormsModule,RegisterpageComponent,NavbarComponent
   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shuttle';
}
