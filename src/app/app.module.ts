import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { OrderService } from './services/order.service';
import { ExFormComponent } from './ex-form/ex-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderGuardService } from './services/order-guard.service';

const appRoutes : Routes = [
  {path: "", redirectTo: "orders", pathMatch: "full" },
  {path : 'orders', component:OrdersComponent},
  {path : 'orders/:id', canActivate: [OrderGuardService], component:OrdersComponent},
  {path : 'template', component:ExFormComponent},
  {path : 'reactive', component:ReactiveFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ExFormComponent,
    ReactiveFormComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
