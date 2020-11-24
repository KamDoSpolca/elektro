import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stores } from './stores.model';
import { Observable } from 'rxjs';

@Injectable()
export class StorelistService {

  constructor(
    protected _http: HttpClient
  ) { }


  getMyStoreData() {
    const url = 'localhost:1234/store/getAll';

    // TODO
    const mockData: Stores[] = [
      {
        name: 'Aupark',
        city: 'Brno',
        address: 'Sportovní 11',
        contact: '0912312312'
      },
      {
        name: 'Aupark',
        city: 'Bratislava',
        address: 'Račianska 11',
        contact: '0912312312'
      },
      {
        name: 'Avion',
        city: 'Košice',
        address: 'Dunajská 11',
        contact: '0912312312'
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
