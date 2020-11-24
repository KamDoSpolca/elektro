import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'elektro-menu',
  templateUrl: './_menu.component.html',
  styleUrls: ['./_menu.component.scss']
})
export class MenuComponent {
  title = 'elektro';

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }


  onSignOut() {
    this._authService.logoff();
  }

  onUserInfo() {
    this._router.navigate(['userinfo'])
  }
  
}


