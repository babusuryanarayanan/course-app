import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-ex-form',
  templateUrl: './ex-form.component.html',
  styleUrls: ['./ex-form.component.scss']
})
export class ExFormComponent implements OnInit {

  @ViewChild('f',{static:true}) userForm : NgForm;

  selectedAddressType = 'home';
  genders = ['male','female'];
  submitted = false;
  user = {
    username:'',
    email:'',
    addresstype:'',
    address:'',
    gender:''
  }

  constructor(private router:Router, private orderService:OrderService) { }

  ngOnInit() {
  }

  /* onSubmit(formObj:NgForm) {
    console.log(formObj);
  } */

  onSubmit() {
    this.submitted = true;


     this.user.username = this.userForm.form.value.userData.username;
    this.user.email = this.userForm.form.value.userData.email;
    this.user.addresstype = this.userForm.form.value.addresstype;
    this.user.address = this.userForm.form.value.address;
    this.user.gender = this.userForm.form.value.gender;

    // this.userForm.reset();
    
  }

  onLoadRoute() {
    this.router.navigate(['/reactive']);
  }

  onActivate() {
    this.orderService.activateSubject.next(true);
  }



}
