import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Location} from '@angular/common';
import { Price } from '../../models/price';

@Component({
  selector: 'app-product-prices',
  templateUrl: './product-prices.component.html',
  styleUrls: ['./product-prices.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductPricesComponent implements OnInit {

  prices: Price[];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getPrices(id).subscribe(prices => this.prices = prices);
  }

  goBack(): void {
    this.location.back();
  }

}
