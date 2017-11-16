import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from './api';
import { Sale } from '../models/sale';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SalesService {

  api: any;
  constructor(private http: HttpClient) {
    this.api = api;
  }

  public get(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.api.address + '/sales');
  }

}
