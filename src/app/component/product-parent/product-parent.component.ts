import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cartItem';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.css']
})
export class ProductParentComponent implements OnInit {
  categories:Category[];
  selectedCategory: number=0;
  totalPrice:number=0;
  constructor(private categoryService:CategoryService,private productService:ProductService) {
    this.categories = categoryService.getCategories();
  }

  ngOnInit(): void {
  }

  categorySelected(){

  }

  recieveCartItems(item:CartItem){
      this.productService.addToCart(item);
      this.totalPrice += item.price;
  }
}
