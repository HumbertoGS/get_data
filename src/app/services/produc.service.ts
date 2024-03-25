import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { product } from '../products/Interfaces/product.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProducService {
  urlApi: string = '';

  constructor(private Http: HttpClient) {}

  getData(): Observable<product> {
    this.urlApi = environment.storeApi;
    return this.Http.get<product>(this.urlApi);
  }
}
