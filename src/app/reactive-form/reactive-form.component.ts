import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['Male','Female'];
  userForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, Validators.required),
        'email' : new FormControl(null,[Validators.required, Validators.email])
      }),
      'gender' : new FormControl('male'),
      'skills' : new FormArray([])
      });

    this.userForm.setValue({
      'userData' : {
        'username' : 'John',
        'email' : 'john@tgmail.com'
      },
      gender : 'Male',
        skills: [] 
    });
  }

  addSkill() {
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.userForm.get('skills')).push(control);
  }

  onSubmit() {
    // console.log(this.userForm);
    // this.userForm.reset();
  }

}
