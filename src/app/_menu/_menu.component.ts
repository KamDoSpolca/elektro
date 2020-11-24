import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { Role } from '../authentication/auth.model';

@Component({
  selector: 'elektro-menu',
  templateUrl: './_menu.component.html',
  styleUrls: ['./_menu.component.scss']
})
export class MenuComponent implements OnInit {
  title = 'elektro';
  name: string = '';
  

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.name = this._authService.getUserName();   
  }

  onSignOut() {
    this._authService.logoff();
  }


  onRoute(link) {
    this._router.navigate([link])
  }
 
  
}


