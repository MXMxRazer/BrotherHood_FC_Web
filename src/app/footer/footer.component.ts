import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private title: String;
  private alignment: String;

  constructor() {
    this.title = 'footer';
    this.alignment = 'center';
  }

  public createTitle(title: String): String {
    return (this.title = title);
  }
}
