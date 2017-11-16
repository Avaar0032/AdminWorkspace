import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from './api';
import { Price } from '../models/price';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PricesService {

  api: any;
  constructor(private http: HttpClient) {
    this.api = api;
  }

  public get(): Observable<Price[]> {
    return this.http.get<Price[]>(this.api.address + '/prices');
  }

}
