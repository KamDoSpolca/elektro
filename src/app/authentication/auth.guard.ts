import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthService    
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    const isAuth = this._authService.getAuth();
    if (!isAuth) {
      this._router.navigate(['/'])
    }
    return true;
  }
}
