import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  contentURL: string = 'http://localhost:8080/get-site-details';
  heroHeading: string;
  herosubHeading: string;
  heroContent: string;

  constructor(private http: HttpClient) {
    this.heroHeading = '';
  }

  ngOnInit(): void {
    this.http
      .get(this.contentURL, { responseType: 'text' })
      .subscribe((data) => {
        this.heroHeading = data;
      });
  }
}
