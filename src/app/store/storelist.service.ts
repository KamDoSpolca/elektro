import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class StorelistService {

  constructor(
    protected _http: HttpClient
  ) { }


  getMyStoreData() {
    const url = 'localhost:1234/store/getAll';

    // TODO
    const mockData: Product[] = [
      {
        EAN: '885SHD84J30',
        name: 'Samsung S10',
        desc: 'Ja som telefoon...',
        price: 621
      },
      {
        EAN: '885SHA14J11',
        name: 'Samsung S9',
        desc: 'Last-year model',
        price: 334
      },
      {
        EAN: '896SCC84X77',
        name: 'Samsung S20',
        desc: 'Novinka',
        price: 799
      },
    ]

    return mockData;

    //return this._http.get(url)
    //  .toPromise(res => {
    //    return res;
    //  })
    //  .catch(
    //    err => alert(err)
    //  );


  }

}
