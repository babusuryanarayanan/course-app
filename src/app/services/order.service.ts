import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders = [
    {id:1, text:'I have an order1'},
    {id:2, text:'I have an order2'},
    {id:3, text:'I have an order3'},
    {id:4, text:'I have an order4'},
    {id:5, text:'I have an order5'}

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
    });
  }
}
