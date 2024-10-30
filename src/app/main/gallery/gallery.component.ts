import { Component } from '@angular/core';
import { SlideInterface } from './carousel/types/slide.interface.types';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDialog } from './photo-dialog/photo.dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent{

  slides: SlideInterface[] = [
    {
      url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      title: 'Slide 1',
    },
    {
      url: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      title: 'Slide 2',
    },
    {
      url: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'Slide 3',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(PhotoDialog, {
      width: '94%',
      height: '90vh',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
