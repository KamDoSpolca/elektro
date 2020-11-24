import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login, Register } from './auth.model';



@Injectable()
export class AuthService {

  private _isAuth: boolean = false;
  private _userName: string = '';
  private _userRole: string = '';
  private _userShop: string = '';

  constructor(
    private _httpClient: HttpClient,
    private _router: Router
  ) { }


  getUserName(): string {
    return this._userName;
  }

  getUserShop(): string {
    return this._userShop;
  }

  getUserRole(): string {
    return this._userRole;
  }


  login(credentials: Login): void {
    const url = 'localhost:1234/login'
    // TODO - hack w/o backend
    this._isAuth = true;
    this._userName = 'Janqo Hrasqo';
    this._userRole = 'Menezeris';
    this._userShop = 'Avpark';

    this._router.navigate(['/stores']);

    //this._httpClient.post(url, credentials)
    //  .subscribe(res => {
    //    this._router.navigate(['/stores']);
    //  }, err => {
    //    alert(err);
    //  });
  }

  register(credentials: Register): void {
    const url = 'localhost:1234/reg'
    // TODO - hack w/o backend
    alert('uspesne ste sa registrovali')
    this._router.navigate(['/']);

    //this._httpClient.post(url, credentials)
    //  .subscribe(res => {
    //    this._router.navigate(['/']);
    //  }, err => {
    //    alert(err);
    //  });
  }

  logoff(): void {
    this._isAuth = false;
    this._router.navigate(['/'])
  }

  getAuth(): boolean {
    return this._isAuth;
  }

}
