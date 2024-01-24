import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogContentComponent } from '../blog-content/blog-content.component';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-minor-blogs',
  templateUrl: './minor-blogs.component.html',
  styleUrls: ['./minor-blogs.component.scss'],
  standalone: true,
  imports: [MatButtonModule, NgFor],
})
export class MinorBlogsComponent {
  blogs: any;

  constructor(public dialog: MatDialog) {
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

  openBlogContent(): void {
    const dialogRefBlog = this.dialog.open(BlogContentComponent);

    dialogRefBlog.afterClosed().subscribe((res) => {
      console.log(`Dialog Closed: ${res}`);
    });
  }
}
