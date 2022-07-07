import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginUserService } from '../login-user.service';
import { UserLogin } from '../user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  public emailId!: String;
  public loginConform : boolean=false;
  user:UserLogin = new UserLogin();

  constructor(private loginUserService : LoginUserService, private router: Router) { }

  ngOnInit(): void {
      localStorage.setItem("status" , "");
   

    this.loginForm = new FormGroup(
      {
        email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)])
      }
    );
  }

  login(){
    debugger
    console.log(this.user);
    this.loginUserService.loginUser(this.user).subscribe(data =>{
      debugger
      localStorage.setItem("status" , "success");
      this.router.navigate(['home'])
      alert("Successfully login..");
    },
    _error => {
      alert("Please check your userid and password");
    });   
  }



  
}
