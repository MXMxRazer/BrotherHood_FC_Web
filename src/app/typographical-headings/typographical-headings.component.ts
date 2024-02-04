import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typographical-headings',
  templateUrl: './typographical-headings.component.html',
  styleUrls: ['./typographical-headings.component.scss'],
})
export class TypographicalHeadingsComponent {
  @Input() title: String | null = '';
  @Input() fontSize: Number = 0;
  @Input() alignText: String = '';

  constructor() {
    this.fontSize = 2.6;
    this.alignText = 'left';
  }
}
