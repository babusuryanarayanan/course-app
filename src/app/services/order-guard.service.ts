import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class OrderGuardService implements CanActivate {

  constructor(private orderService:OrderService,private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.orderService.isOrderGuarded().then((hasOrdered:boolean)=> {
        if(hasOrdered) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
    });

  }
}
