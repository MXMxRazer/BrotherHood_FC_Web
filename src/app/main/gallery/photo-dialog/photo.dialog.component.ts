import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-photo-dialog-component',
  templateUrl: 'photo.dialog.component.html',
})
export class PhotoDialog {
  constructor(public dialogRef: MatDialogRef<PhotoDialog>) {}
}
