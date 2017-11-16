import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['id', 'name', 'create_date', 'commands'];
  dataSource: MatTableDataSource<Product>;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.get().subscribe(products => this.dataSource = new MatTableDataSource<Product>(products));
  }

}
