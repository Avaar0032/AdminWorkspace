import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from './api';
import { SaleDetail } from '../models/sale-detail';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SaleDetailsService {

  api: any;
  constructor(private http: HttpClient) {
    this.api = api;
  }

  public get(): Observable<SaleDetail[]> {
    return this.http.get<SaleDetail[]>(this.api.address + '/sale_details');
  }

}
