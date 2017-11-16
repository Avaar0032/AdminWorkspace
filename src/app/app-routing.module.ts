import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './products/product/product.component';
import { ProductPricesComponent } from './products/product-prices/product-prices.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'product/:id/prices', component: ProductPricesComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
