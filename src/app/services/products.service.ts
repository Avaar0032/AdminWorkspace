import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from './api';
import { Product } from '../models/product';
import { Price } from '../models/price';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductsService {

  api: any;
  constructor(private http: HttpClient) {
    this.api = api;
  }

  public get(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api.address + '/products');
  }

  public getById(id: Number): Observable<Product> {
    return this.http.get<Product>(this.api.address + '/products/' + id);
  }

  public getPrices(productId: Number): Observable<Price[]> {
    return this.http.get<Price[]>(this.api.address + '/products/' + productId + '/prices');
  }

}
