import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Login } from '../auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'elektro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'elektro';
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit() {
    const credentials: Login = { email: this.loginForm.value.email, password: this.loginForm.value.password };

    this._authService.login(credentials);
  }

  onRegister() {
    this._router.navigate(['/register']);
  }


}
