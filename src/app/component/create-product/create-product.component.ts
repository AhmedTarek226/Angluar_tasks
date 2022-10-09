import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { IProduct } from 'src/app/model/product';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  category: Category[];
  // products: IProduct[]=[];
  addProductForm: FormGroup;
  constructor(private categoryService:CategoryService) {
    this.category = categoryService.getCategories();
    this.addProductForm=new FormGroup({
      name: new FormControl("",[Validators.required]),
      quantity: new FormControl(1,[Validators.required,Validators.min(1)]),
      price:new FormControl(1,[Validators.required,Validators.min(1)]),
      img: new FormControl("",[Validators.required,Validators.pattern("^https?:\/\/[A-Za-z0-9:.]*([\/]{1}.*\/?)$")]),
      categoryId: new FormControl("",[Validators.required])
    })

    // this.products=[ ]

    // this.categories=[ ]
   }

  ngOnInit(): void {
  }

  AddProductToList(){}

}
