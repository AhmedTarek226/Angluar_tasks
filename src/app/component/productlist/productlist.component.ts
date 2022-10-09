import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/service/product.service';
import {IProduct } from '../../model/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList: IProduct[];
  constructor(private productService:ProductService) {
    this.productList = productService.getProducts();

   }

  ngOnInit(): void {
  }
}
