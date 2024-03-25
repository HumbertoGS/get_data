import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { product } from '../products/Interfaces/product.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private configUrl: string = '';

  constructor(private http: HttpClient) {}

  getProduts(): Observable<product> {
    this.configUrl = environment.storeApi;

    return this.http.get<product>(this.configUrl);
  }
}
