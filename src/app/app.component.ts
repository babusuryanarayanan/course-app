import { Component, Inject } from '@angular/core';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-app';

  constructor(private orderService:OrderService){
    
  }

  onUpdate(id, event) {
    console.log(id, event.text);
    this.orderService.update(id, event.text);
  }



}
