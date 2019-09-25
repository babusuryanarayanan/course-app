import { Component, Inject } from '@angular/core';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-app';
  showChild:boolean = true;


  txtString: String = 'Test Value';

  user = {
    firstName : 'John',
    lastName : 'Mathew'
  }

  constructor(private orderService:OrderService){
    
  }

  onUpdate(id, event) {
    this.orderService.update(id, event.text);
  }

  toggleLifecyle() {
    this.showChild = !this.showChild;
  }

  OnUserClick(fVal, lVal) {
    // this.user.firstName = fVal;
    // this.user.lastName = lVal;
    this.user = {
      firstName : fVal,
      lastName : lVal
    }

    
  }

}
