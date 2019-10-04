import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

   orders = [
    {id:1, text: 'I have an order1', product:'iphone 4', price:100},
    {id:2, text: 'I have an order2', product:'iphone 7', price:200},
    {id:3, text: 'I have an order3', product:'iphone 10', price:300},
    {id:4, text: 'I have an order4', product:'Redmi', price:400},
    {id:5, text: 'I have an order5', product:'Samsung', price:500}

  ]; 
  constructor() { 
    // this.getProduct_for();
    // this.getProduct_each();
    // this.getProduct_map();
    // this.getProduct_filter();
    this.getProduct_reducer();
  }
  
  getProduct_for() {
    var products = [];
    for(var i=0;i<this.orders.length;i++) {
      let order = this.orders[i]
      products.push(order.product);
    }
    console.log(products);

  }
  getProduct_each() {
    var products = [];
    this.orders.forEach(order => {
      products.push(order.product);
    });
    console.log(products);
  }
  getProduct_map() {
    
    let products = this.orders.map((order) => {
      return order.product;
    });
    console.log(products);
  }

  getProduct_filter() {
    let products = this.orders.map((order) => {
      return order.product;
    }).filter(product => {
       if (product.includes('iphone')) {
         return product
       }
    });
    console.log(products);
  }

  getProduct_reducer() {
    let totalPrices = this.orders.reduce((prev, curr)=> {
          return prev+curr.price;
    },0);
    console.log(totalPrices);
  }


}
