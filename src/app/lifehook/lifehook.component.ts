import { Component, OnInit, Input, SimpleChanges, ContentChild, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lifehook',
  templateUrl: './lifehook.component.html',
  styleUrls: ['./lifehook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifehookComponent implements OnInit {

  @Input() lifeCycleData;
  @ContentChild('ccRef', {static:true}) ccRef : ElementRef;
  @ViewChild('vcRef', {static:true}) vcRef : ElementRef;

  constructor() { 
    console.log("constructor");
  }
  
  ngOnChanges(changes:SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let currentValue = change.currentValue;
      let previousValue = change.previousValue;
      console.log(`Current Value ::: ${currentValue}, Previous Value:::: ${previousValue}`);
    }
  }

  ngOnInit() {
    console.log("ngOnInit");
    console.log(`ngAfterViewInit ${this.vcRef.nativeElement.textContent}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log(this.ccRef.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit ${this.vcRef.nativeElement.textContent}`);
  }

  ngOnDestroy() {
    console.log("onDestroy");
  }

}
