import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typographical-headings',
  templateUrl: './typographical-headings.component.html',
  styleUrls: ['./typographical-headings.component.scss'],
})
export class TypographicalHeadingsComponent {
  @Input() title: String = '';
}
