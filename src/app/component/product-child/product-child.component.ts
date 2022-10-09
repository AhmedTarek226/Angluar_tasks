import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/app/model/cartItem';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit,OnChanges {
  @Input() selectedCategory: number=0;
  @Output() handleList:EventEmitter<CartItem>
  productList:IProduct[];
  constructor(private productService:ProductService) {
    this.handleList = new EventEmitter<CartItem>();
    this.productList = productService.getProducts();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productList = this.productService.filterByCategoryId(this.selectedCategory);
  }

  Buy(id:number,price:number){
    this.handleList.emit({
      id:id,
      price:price,
      quantity:1,
    })
  }

}
