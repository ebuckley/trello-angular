import { Component, OnInit, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'eb-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnChanges {

  @Input() data;
  ast: any;

  constructor() { }

  ngOnChanges() {
    // this.ast = parse(this.data);
  }

}
