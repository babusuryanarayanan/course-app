import { Component, Inject } from '@angular/core';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-app';
  txtString:string = "test value";
  showHook:boolean = true;

  user = {
    firstName : 'John',
    lastName : 'Mathew'
  }

  constructor(private orderService:OrderService){
    
  }

  toggleHook(fName, lName) {
    // this.user.firstName = fName;
    // this.user.lastName = lName;
    this.user = {
      firstName : fName,
      lastName : lName
    }
  }

  onUpdate(id, event) {
    console.log(id, event.text);
    this.orderService.update(id, event.text);
  }

}
