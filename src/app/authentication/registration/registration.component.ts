import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Register } from '../auth.model';
import { Router } from '@angular/router';

@Component({
    selector: 'elektro-register',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


    registerForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
      private _authService: AuthService,
      private _router: Router
    ) { }

    ngOnInit() {
        this.registerForm = this._formBuilder.group({
            role: new FormControl(null),
            name: new FormControl(null),
            email: new FormControl(null),
            password: new FormControl(null),
            password2: new FormControl(null)
        });
    }
    onLogin() {
        this._router.navigate(['/']);

    }
    onRegister() {
        const pass = this.registerForm.value.password;
        const pass2 = this.registerForm.value.password2;

        const credentials: Register = {
            name: this.registerForm.value.name,
            email: this.registerForm.value.email,
            password: pass,
            role: this.registerForm.value.role
        };

        if (pass === pass2) {
            this._authService.register(credentials);
        } else {
            alert('Hesla sa nezhoduju.')
        }


    }
}
