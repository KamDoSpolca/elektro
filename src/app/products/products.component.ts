import { Component } from '@angular/core';

@Component({
  selector: 'elektro-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = 'elektro';

  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
  })
}
