import { NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';

export interface UserInfo {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor, MatDividerModule],
})
export class ApplicationComponent {
  name: any;
  email: string = '';
  message: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      data: { name: this.name, email: this.email, message: this.message },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log('The Dialog was Closed!');
      this.name = res;
      console.log(res);
    });
  }
}

@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog/dialog-overview.component.html',
  styleUrls: ['./dialog/dialog-overview.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgFor,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class DialogOverview {
  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: UserInfo,
    private _formBuilder: FormBuilder
  ) {}

  onComplete(): void {
    console.log(this.secondFormGroup.value);
    this.dialogRef.close();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
