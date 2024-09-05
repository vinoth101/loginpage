import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private apiUrl = 'http://localhost:8082/api';
 
  constructor(private http: HttpClient) { }
 
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }
 
  loginUser(user: User): Observable<User> {
    console.log(JSON.stringify(user));
    let headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    return this.http.post<User>(`${this.apiUrl}/login`, JSON.stringify(user),{headers});
  }
}
 
 