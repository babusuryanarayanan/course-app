import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  hasOrdered = true;

  /* orders = [
    {id:1, text: 'I have an order1'},
    {id:2, text: 'I have an order2'},
    {id:3, text: 'I have an order3'},
    {id:4, text: 'I have an order4'},
    {id:5, text: 'I have an order5'},

  ];  */
  orders:any = [];
  errorMessage:string = '';
  activateSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { 
    this.getOrders();
  }

  getOrders() {
    // scenario 1 - get Request. 2 cases - with and without query params
   
     this.http.get('/assets/data/orders.json').subscribe((data) => {

        this.orders = data;
    });
    // scenario - 1a - adding request parameters
   /*  const params = new HttpParams()
    .set('id','1234')
    .set('text','My search text');
     this.http.get('/assets/data/orders.json', { // Observables 
       params : params
     }).subscribe((data) => { // Observer 
        console.log(data);
        this.orders = data;
    }, (error)=> {
      console.log(error);
    },() => {
      console.log()
    }); */

    // scenario 2 - post request
    /* const newOrders = {
      id: 7,
      text : 'new order for text'
    }
    this.http.post('/assets/data/orders.json',newOrders).subscribe((data)=> {
      this.orders = data;
    }); */
    //scenario 3 - handling error
    /*   const newOrders = {
      id: 7,
      text : 'new order for text'
    }
    this.http.post('/assets/data/orders.json',newOrders)
    .subscribe((data)=> {
      this.orders = data;
    },(error:HttpErrorResponse)=> {
      
        this.errorMessage = `An error occured ${error.message}`;
      
    });  */
    // scenario 4 - http headers
   /*  this.http.get('/assets/data/orders.json', {
      headers : new HttpHeaders().set('token', 'xyzabc')
    }).subscribe((data) => {
       console.log(data);
       this.orders = data;
   }); */
   // scenario 5 - read headers sent by server.
  /* this.http.get('/assets/data/orders.json', {
    observe :'response'
    }).subscribe((data) => {
      console.log(data.headers.get('Date'));
      // this.orders = data;
    });

  } */
  // scenario 6 - other response type
  /* this.http.get('/assets/data/orders.txt', {
      responseType : 'text'
    }).subscribe((data) => {
      console.log(data);
      // this.orders = data;
    }); */

  }

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
