import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  title: String;

  constructor() {
    this.title = '';
  }

  protected createTitle(title: String): String {
    this.title = title;
    return this.title;
  }
}
