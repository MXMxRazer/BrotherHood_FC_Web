import { Component, OnInit } from '@angular/core';
import { Logger } from '../../logger/logger';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { RestService } from 'src/app/REST_Client/rest_client.injector';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  imports: [HttpClientModule],
})
export class ContactPageComponent implements OnInit {
  values = '';

  constructor(
    private logger: Logger,
    private http: HttpClient // private restService: RestService
  ) {}

  ngOnInit(): void {}

  // form actions
  onKey(event: any): void {
    this.values += event.target.value;
    this.logger.log(this.values);
  }

  // restService contacter in angular (indirectly contacting the backend services for sending mail to the end-user)
  // sendEmail(): void {
  //   this.restService.sendEmail({ FormBuilderInformation: 'none' }).subscribe(
  //     (data) => {
  //       console.log(data);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
}
