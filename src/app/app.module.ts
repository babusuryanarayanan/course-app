import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { OrderService } from './services/order.service';
import { ExFormComponent } from './ex-form/ex-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderGuardService } from './services/order-guard.service';
import { MyhttpinterceptorService } from './services/myhttpinterceptor.service';
import { CharpipePipe } from './pipes/charpipe.pipe';
import { TriggerComponent } from './trigger/trigger.component';

const appRoutes : Routes = [
  {path: "", redirectTo: "orders", pathMatch: "full" },
  {path : 'orders', component:OrdersComponent},
  {path : 'orders/:id', canActivate: [OrderGuardService], component:OrdersComponent},
  {path : 'template', component:ExFormComponent},
  {path : 'reactive', component:ReactiveFormComponent},
  {path : 'trigger', component:TriggerComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ExFormComponent,
    ReactiveFormComponent,
    OrdersComponent,
    CharpipePipe,
    TriggerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:MyhttpinterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
