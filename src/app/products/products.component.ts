import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from './Interfaces/product.interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./styles/products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: product | any;
  @Output() counterEvent = new EventEmitter<string>();

  constructor(private productServices: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productServices.getProduts().subscribe((value) => {
      this.products = value;
    });
  }

  incrementCounter() {
    this.counterEvent.emit('1');
  }
}
