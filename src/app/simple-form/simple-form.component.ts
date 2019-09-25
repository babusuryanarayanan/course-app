import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  encapsulation : ViewEncapsulation.Emulated
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  @Input() orderInput;
  show:boolean = false;
  cssClasses = {'bold':true,'highlight':true,'strike':false};
  isMousedown:boolean;

  @Output() updateVal = new EventEmitter();

  ngOnInit() {
    
  }

  onClick(event, value) {
    console.log(event, value);
    this.updateVal.emit({text:value});
  }

  onCheck(event) {
    this.show = event.target.checked;
  }

}
