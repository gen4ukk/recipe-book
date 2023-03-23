import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isLoginMode = true;
  isLoading = false;
  error: string;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm){

    if(!authForm.valid){
      return;
    }

    let authObs : Observable<AuthResponseData>; 
    this.isLoading = true;
    const email = authForm.value.email;
    const password = authForm.value.password;

    if(this.isLoginMode){
      authObs = this.authService.login(email, password);
    }
    else{
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(response => 
      {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error => 
      {
        console.log(error);
        this.error = error;
        this.isLoading = false;
      });

    authForm.reset();
  }
}
