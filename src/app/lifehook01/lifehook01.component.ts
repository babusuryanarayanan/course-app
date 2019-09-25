import { Component, OnInit, Input, SimpleChanges, ContentChild, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lifehook01',
  templateUrl: './lifehook01.component.html',
  styleUrls: ['./lifehook01.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class Lifehook01Component implements OnInit {

  @Input() cycleData;
  
 
  @ContentChild('ccRef',{static:true}) ccRef: ElementRef;
  @ViewChild('vcRef', {static:true}) vcRef : ElementRef; 

  constructor() { }

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let currentValue = change["currentValue"];
      console.log(`Current Value : ${currentValue}`);
      let prevValue = change["previousValue"];
      console.log(`Previous Value: ${prevValue}`);
    }
  }

  ngOnInit() {
    console.log(`Init ${this.cycleData}`);
    console.log(`Init>>>> ngAfterViewIinit ${this.vcRef.nativeElement.textContent}`);
  }

  ngDoCheck() {
    console.log("doCheck");
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit ${this.ccRef.nativeElement.textContent}`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewIinit ${this.vcRef.nativeElement.textContent}`);
  }

}
