import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';

import { HomeComponent } from './home/home.component';



 export const routes: Routes = [
  { path: 'register', component: RegisterpageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } ,
  { path: 'login', component: LoginpageComponent },
  { path: 'home', component: HomeComponent },
 
];
 
  export class AppRoutingModule { 

  }

