import { NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatStepper,
  MatStep,
  MatStepperModule,
} from '@angular/material/stepper';

export interface UserInfo {
  name: string;
  email: string;
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

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      data: { name: this.name, email: this.email },
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
  ],
})
export class DialogOverview {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: UserInfo,
    private _formBuilder: FormBuilder
  ) {}

  onNoClick(): void {
    console.log(this.firstFormGroup.value, this.secondFormGroup.value);
    // this.dialogRef.close();
  }
}
