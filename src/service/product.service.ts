import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/model/cartItem';
import { IProduct } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList:IProduct[];
  constructor() {
    this.productList=[
      {
        id:1,
        name:"mobile 1",
        quantity: 4,
        price:200,
        img:"https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-51..v1637092108.jpg",
        categoryId:1
      },
      {
        id:2,
        name:"mobile 2",
        quantity: 10,
        price:500,
        img:"https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-51..v1637092108.jpg",
        categoryId:1
      },
      {
        id:3,
        name:"lap 1",
        quantity: 10,
        price:500,
        img:"https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-51..v1637092108.jpg",
        categoryId:2
      },
      {
        id:4,
        name:"lap 2",
        quantity: 10,
        price:500,
        img:"https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-51..v1637092108.jpg",
        categoryId:2
      },
      {
        id:5,
        name:"lap 3",
        quantity: 10,
        price:500,
        img:"https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-51..v1637092108.jpg",
        categoryId:2
      },
      {
        id:6,
        name:"tablet12",
        quantity: 10,
        price:500,
        img:"https://i.pcmag.com/imagery/roundups/018cwxjHcVMwiaDIpTnZJ8H-51..v1637092108.jpg",
        categoryId:3
      }
    ]
   }

   getProducts() :IProduct[]{
    return this.productList;
   }

   filterByCategoryId(id:number) :IProduct[]{
    if(id==0) return this.getProducts();
    return this.productList.filter(product => product.categoryId == id);
   }

   addToCart(cartItem:CartItem){
    this.productList.forEach(
      item=>
        {
          if(item.id == cartItem.id){
            item.quantity -= cartItem.quantity;      
        }
      }
      )
   }
}
