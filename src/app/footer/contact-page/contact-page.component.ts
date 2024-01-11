import { Component, Injectable } from '@angular/core';
import { Logger } from '../../logger/logger';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  values = '';

  constructor(private logger: Logger) {}

  onKey(event: any): void {
    this.values += event.target.value;
    this.logger.log(this.values);
  }
}
