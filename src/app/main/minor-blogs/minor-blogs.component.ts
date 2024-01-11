import { Component } from '@angular/core';

@Component({
  selector: 'app-minor-blogs',
  templateUrl: './minor-blogs.component.html',
  styleUrls: ['./minor-blogs.component.scss'],
})
export class MinorBlogsComponent {
  blogs: any;

  constructor() {
    this.blogs = [
      {
        type: 'Technology',
        title: 'Technological Post',
        date: 'Nov 12',
        content:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
      },
      {
        type: 'Finance',
        title: 'Financial Post',
        date: 'Dec 12',
        content:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
      },
      {
        type: 'Finance',
        title: 'Financial Post',
        date: 'Dec 12',
        content:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
      },
      {
        type: 'Finance',
        title: 'Financial Post',
        date: 'Dec 12',
        content:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '',
      },
    ];
  }
}
