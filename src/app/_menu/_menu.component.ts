import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elektro-menu',
  templateUrl: './_menu.component.html',
  styleUrls: ['./_menu.component.scss']
})
export class MenuComponent {
  title = 'elektro';

  constructor(
    private _router: Router
  ) { }

  onRoute(link) {
    this._router.navigate([link])
  }
}


