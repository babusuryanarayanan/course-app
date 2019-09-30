import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  hasOrdered = false;

  orders = [
    {id:1, text: 'I have an order1'},
    {id:2, text: 'I have an order2'},
    {id:3, text: 'I have an order3'},
    {id:4, text: 'I have an order4'},
    {id:5, text: 'I have an order5'},

  ];

  constructor() { }

  update(id, text) {
    this.orders = this.orders.map(m=> {
      if(m.id === id) {
        return {
          id, text
        }
      } else {
        return m;
      }
    })
  }
 
  isOrderGuarded() {

      return new Promise((resolve, reject)=> {
        setTimeout(()=> {
          resolve(this.hasOrdered);
        },800);
    });
    
  }
}
