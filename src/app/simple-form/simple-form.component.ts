import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  show:boolean = false;
  isMousedown;
  cssClasses = {'bold':true, 'highlight':true, 'strike':true};

  @Input() orderInput;

  @Output() updateVal = new EventEmitter();

  ngOnInit() {
  }

  onClick(event, value) {
    console.log(event, value);
    this.updateVal.emit({text:value});
  }

  onCheck(x) {

    this.show = x.target.checked;

  }

}
