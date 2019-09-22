import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders = [
    'I have an order1',
    'I have an order2',
    'I have an order3',
    'I have an order4',
    'I have an order5',

  ];

  constructor() { }
}
