import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ProductsService } from './services/products.service';
import { SalesService } from './services/sales.service';
import { SaleDetailsService } from './services/sale-details.service';
import { PricesService } from './services/prices.service';
import { ProductComponent } from './products/product/product.component';
import { ProductPricesComponent } from './products/product-prices/product-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    ProductPricesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [ ProductsService, SalesService, SaleDetailsService, PricesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
