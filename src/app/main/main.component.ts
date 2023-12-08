import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  title: String;
  alignText: String;

  constructor() {
    this.title = '';
    this.alignText = '';
  }

  public createTitle(title: String): String {
    this.title = title;
    return this.title;
  }

  public customAlignText(align: String): String {
    this.alignText = align;
    return this.alignText;
  }
}
