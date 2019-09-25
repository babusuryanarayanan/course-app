import { Component, OnInit, SimpleChanges, Input, ViewChild, ElementRef, ContentChild } from '@angular/core';
import 'lodash';
declare var _:any;

@Component({
  selector: 'app-lifehook',
  templateUrl: './lifehook.component.html',
  styleUrls: ['./lifehook.component.scss']
})
export class LifehookComponent implements OnInit {
  @Input() inputVal;
  @ViewChild('inputValRef',{static:true}) inputRef : ElementRef;
  @ContentChild('contentRef', {static:true}) contentRef : ElementRef;
  constructor() { 
    console.log(`constructor ${this.inputVal}`);
    const newArr = [1,2,3];
    console.log("LODASH");
    console.log(_.shuffle(newArr));
    
  }

  ngOnChanges(changes:SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = change.currentValue;
      let previous = change.previousValue;
      console.log("Current : "+current+", Previous: "+previous);
    }
  }

  ngOnInit() {
    console.log(`ngOnInit ${this.inputVal}`);
    
  }

  ngDoCheck() {
    console.log(`ngDoCheck ${this.inputVal}`);
  }
  ngAfterContentInit() {
    console.log(`ngAfterContentInit ${this.inputVal}`);
    console.log(`native element - content-init`);
    console.log(`${this.contentRef.nativeElement}`);
  }
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked ${this.inputVal}`);
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit ${this.inputVal}`);
    console.log(`ngAfterViewInit::viewChild`);
    console.log(`${this.inputRef.nativeElement.textContent}`);
  }
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked ${this.inputVal}`);
  }
  ngOnDestroy() {
    console.log(`ngOnDestroy ${this.inputVal}`);
  }

}
