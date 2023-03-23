import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User|null>(null);
  private toketExpirationTimer: any;

constructor(private http: HttpClient, private router: Router) { }

signup(email: string, password: string){
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdb7j1Il9vlEaKhddIgpPbeCkxPoOkLwc',{
    email: email,
    password: password,
    returnSecureToken: true
  }).pipe(catchError(this.handleError),
  tap(responseData => {this.handleAuth(responseData)}));
}

login(email: string, password: string){
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdb7j1Il9vlEaKhddIgpPbeCkxPoOkLwc',{
    email: email,
    password: password,
    returnSecureToken: true
  }).pipe(
    catchError(this.handleError),
    tap(responseData => {this.handleAuth(responseData)})
  );
}

autologin(){
  const userDataString = localStorage.getItem('userData');
  const userData: {
    email: string; 
    id: string; 
    _token: string; 
    _tokenExpirationDate: string;
  } = userDataString ? JSON.parse(userDataString) : null;

  if(!userData){
    return;
  }

  const user = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

  if (user.token) {
    this.user.next(user);
    const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
    this.autologout(expirationDuration);
  }
}

logout(){
  this.user.next(null);
  this.router.navigate(['/auth']);
  localStorage.removeItem('userData');

  if (this.toketExpirationTimer) {
    clearTimeout(this.toketExpirationTimer);
  }
}

autologout(expirationTime: number){
  this.toketExpirationTimer = setTimeout(()=>{
    this.logout();
  }, expirationTime);
}

private handleAuth(responseData: AuthResponseData){
  const expirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
  const user = new User(responseData.email, responseData.localId, responseData.idToken, expirationDate);
  this.user.next(user);
  localStorage.setItem('userData', JSON.stringify(user));
  this.autologout(+responseData.expiresIn * 1000);
}

private handleError(errorResponse: HttpErrorResponse){
  let errorMessage = 'An unknown error occured!';

  if(!errorResponse.error || !errorResponse.error.error){
    return throwError(errorMessage);
  }

  switch(errorResponse.error.error.message){
    case 'EMAIL_EXISTS':
      errorMessage = 'The email address is already in use by another account.';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'The password is invalid or the user does not have a password.';
      break;
  }

  return throwError(errorMessage);
}


}

export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}
