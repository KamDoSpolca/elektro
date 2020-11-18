import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../auth.model';

@Component({
  selector: 'elektro-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  title = 'elektro';

  constructor(
   private _authService: AuthService,
   private _router: Router
  ) { }


  onLogin() {
    this._router.navigate(['/']);

  }
}
