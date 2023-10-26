import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const defaultPath = '/';  

export interface IUser {
  username: string;  
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _lastAuthenticatedPath: string = defaultPath;
  private _user!: IUser;
  isLogged = false;

  constructor(private router: Router) { }

  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  get getUser(){
    return this._user;
  }

  get loggedIn(): boolean {
    return this.isLogged;
  }

  async logOut() {
    this.isLogged = false;
    this.router.navigate(['/login']);
  }

  async logIn(user:string, password:string){

    if(password != '123') return false;

    this._user = { username: user };
    this.isLogged = true;
    this.router.navigate([this._lastAuthenticatedPath]);

    return true;
  }

}
