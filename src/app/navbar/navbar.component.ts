import { Component } from '@angular/core';
import { RegisterpageComponent } from '../registerpage/registerpage.component';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,LoginpageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
