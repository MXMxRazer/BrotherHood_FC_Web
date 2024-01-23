import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogContentComponent } from '../blog-content/blog-content.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(public dialog: MatDialog) {}

  openBlogContent(): void {
    const dialogRefBlog = this.dialog.open(BlogContentComponent);

    dialogRefBlog.afterClosed().subscribe((res) => {
      console.log(`Dialog Closed: ${res}`);
    });
  }
}
