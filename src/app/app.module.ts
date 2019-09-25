import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { OrderService } from './services/order.service';
import { LifehookComponent } from './lifehook/lifehook.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    LifehookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
