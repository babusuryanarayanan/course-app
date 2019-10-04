import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  animations : [
    trigger('slide',[
        state('move',style({
          'background-color' : 'green',
          'height' : '100px'
        })),state('stop',style({
          'background-color' : 'red',
          'height' : '50px'
        })),// transition('* => *',animate(500))
        transition('move=> *',animate(2000, keyframes([
          style({'transform':'scale(0)'}),
          style({'transform':'scale(0.4)'}),
          style({'transform':'scale(0.6)'}),
          style({'transform':'scale(0.9)'}),
          style({'transform':'scale(1)'})
        ])))
    ])
  ],
  styleUrls: ['./trigger.component.scss']
})
export class TriggerComponent implements OnInit {

  slideData = 'stop';

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.slideData = 'move';
  }
  onStop() {
    this.slideData = 'stop';
  }

}
