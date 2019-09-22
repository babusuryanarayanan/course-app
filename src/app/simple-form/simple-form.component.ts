import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  @Input() orderInput;

  @Output() updateVal = new EventEmitter();

  ngOnInit() {
  }

  onClick(event, value) {
    console.log(event, value);
    this.updateVal.emit({text:value});
  }

}
