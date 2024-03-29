import { Component, OnInit } from '@angular/core';
import { Logger } from '../../logger/logger';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormType } from './contact_form_type/FormType.type';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  imports: [HttpClientModule, ReactiveFormsModule],
})
export class ContactPageComponent implements OnInit {
  url: string = 'http://localhost:8080/send-mail-demo';
  contactForm: FormGroup;

  constructor(private logger: Logger, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      first_name: new FormControl('xyz'),
      last_name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    });
  }

  onFormSubmit(form: FormGroup): void {
    if (form.valid) {
      this.http
        .post<FormType>('http://localhost:8080/send-mail', {
          to: 'tamrakar@sheridancollege.ca',
          subject: 'fromAngular',
          message: form.value.first_name + ' ' + form.value.last_name,
        })
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
