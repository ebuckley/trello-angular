import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eb-error',
  template: `
  <div *ngIf="error" class='wrapper'>
    <a (click)="showError = true">Error</a>
    <pre *ngIf="showError">
      {{error | json}}
    </pre>
  </div>
  `
})
export class ErrorComponent implements OnInit {

  showError = false;
  @Input() error: any;
  constructor() { }

  ngOnInit() {
  }

}
