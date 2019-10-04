import { Component} from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { OrderService } from './services/order.service';
import { MiscService } from './services/misc.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-app';
  intSubscription: Subscription;
  isActivated = false;
  activateSubscription: Subscription;
  txtString = "Hi How are you and let us guess";

  startDate = new Date();

  constructor(private orderService:OrderService, private miscService:MiscService){
    
  }

  ngOnInit() {

    // scenario - at every 1 sec an emit will be emitted.
    /* this.intSubscription = interval(1000).subscribe((data)=> {
      console.log(data);
    }); */
    // scenario - 2, creating our own observables
   /* const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count=== 2) {
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      },1000);
    }); */

    //operators
    /* customObservable.pipe(map((data)=> {
      return 'Round :' + (data);
    })); */

    /* this.intSubscription = customObservable.subscribe((data)=> {
      console.log(data);
    },(error)=> {
      console.log(error);
    },()=> {
      console.log("completed");
    }); */

    // scenario - subject
    this.activateSubscription = this.orderService.activateSubject.subscribe((data) => {
      console.log(data);
      this.isActivated = data;
    });
    
  }

  ngOnDestroy() {
    this.intSubscription.unsubscribe();
    this.activateSubscription.unsubscribe();
  }

  

}
