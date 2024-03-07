import { Component, Input } from '@angular/core';
import { SlideInterface } from './types/slide.interface.types';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition(':increment', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':decrement', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CarouselComponent {
  @Input() slides: SlideInterface[] = [];
  slide = [
    'https://via.placeholder.com/800x400/FF5733/ffffff',
    'https://via.placeholder.com/800x400/33FF57/ffffff',
    'https://via.placeholder.com/800x400/5733FF/ffffff',
  ];

  currentIndex = 0;

  goToPrevious(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
}
