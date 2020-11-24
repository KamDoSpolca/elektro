import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Role } from '../auth.model';

@Component({
  selector: 'elektro-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  name: string;
  role: string;
  shop: string;

  constructor(    
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.name = this._authService.getUserName();
    this.role = this._authService.getUserRole();
    this.shop = this._authService.getUserShop();

  }
}
