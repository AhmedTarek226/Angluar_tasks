import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];
  constructor() { 
    this.categories=[
      {
        id:1,
        name:"mobiles"
      },
      {
        id:2,
        name:"laps"
      },
      {
        id:3,
        name:"tablets"
      },
      {
        id:0,
        name:"all"
      },
    ]
  }

  getCategories():Category[]{
    return this.categories;
  }
}
