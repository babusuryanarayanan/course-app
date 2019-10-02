import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  listOfOrders:Object;
  order:any = {};
  paramOrder: boolean = false;
  paramSubscription: Subscription;

  constructor(private orderService:OrderService, private route:ActivatedRoute) { }

  ngOnInit() {
   
    let id = this.route.snapshot.params['id'];
    // console.log(this.route.snapshot.queryParams);
    // console.log("Fragment>> "+this.route.snapshot.fragment);
    this.route.queryParams.subscribe(qParams=> {
        console.log(qParams);
    })
    
    this.paramSubscription = this.route.params.subscribe((params:Params) => {
      this.order = {};
      if(params['id']) {
        this.order.id = parseInt(params.id);
        this.paramUpdate(this.order.id);
      }
      
    })
  }

  paramUpdate(id) {
    let text;
    if(id) {
      this.paramOrder = true;
      id = parseInt(id);
      for(let i=0; i<this.orderService.orders.length;i++) {
        if(this.orderService.orders[i].id === id) {
          text = this.orderService.orders[i].text;
        }
      }
      this.order = {
        id : id,
        text : text
      }
    }
  }


  onUpdate(id, event) {
    console.log(id, event.text);
    this.orderService.update(id, event.text);
  }

  /* fetchOrders() {
    this.orderService.getOrders().subscribe((orderData) => {
      this.listOfOrders = orderData;
    });
  } */

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
