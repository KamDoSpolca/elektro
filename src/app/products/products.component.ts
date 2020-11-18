import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elektro-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = 'elektro';

  constructor(
    private _router: Router
  ) { }

 
  }
