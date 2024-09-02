import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';



 export const routes: Routes = [
  { path: 'register', component: RegisterpageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Redirect to login by default
];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { 

  }

