import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export class RestService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080/send-mail-demo';

  sendEmail(context: any): Observable<any> {
    return this.http
      .post(this.url, JSON.stringify(context))
      .pipe(map((response: any) => response.json()));
  }
}
