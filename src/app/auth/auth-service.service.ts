import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // tslint:disable-next-line: variable-name
  private _userIsAuthenticated = false;


  constructor() { }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  login() {
    this._userIsAuthenticated = true;
  }
  logout() {
    this._userIsAuthenticated = false;
  }
}
