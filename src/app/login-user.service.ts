import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  user: UserLogin = new UserLogin();
  public checkValue: boolean = false;
  public check1Value: String = "";
  

  public baseUrl = "http://localhost:8081/user/login";

  constructor(private httpClient: HttpClient, private router: Router) { 
    localStorage.setItem("status" , "");
  }
  

  loginUser(user: UserLogin): Observable<object> {

    return this.httpClient.post(`${this.baseUrl}`, user);

  }
  getLoginUser() {
    debugger
    console.log(this.httpClient)
    console.log(!!localStorage.getItem("status"))
    return !!localStorage.getItem("status");
  }




}
