import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eb-accordian',
  template: `
  <a (click)="toggle()">{{trigger}}</a>
  <div *ngIf="trigger === 'hide'" class="content">
    <ng-content></ng-content>
  </div>
  `
})
export class AccordianComponent implements OnInit {

  trigger= 'show';
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.trigger === 'show') {
      this.trigger = 'hide';
    } else if (this.trigger === 'hide') {
      this.trigger = 'show';
    }
  }
}
