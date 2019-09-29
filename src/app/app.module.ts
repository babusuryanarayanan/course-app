import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { OrderService } from './services/order.service';
import { ExFormComponent } from './ex-form/ex-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

Routes : [
  {path:'/contacts', component:'HomeComponent'},
  {path:'/home', component:'HomeComponent'},
  {path:'/messages', component:'HomeComponent'},
  {path:'/contacts/add', module:'contactModule'},
  {path:'contacts/update', component:'HomeComponent'},
  {path:'contacts/delete', component:'HomeComponent'},

]



@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ExFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
