import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({selector: 'app-error-and-complete', templateUrl: './error-and-complete.component.html', styleUrls: ['./error-and-complete.component.css']})
export class ErrorAndCompleteComponent implements OnInit {

  messages: String[] = [];

  constructor() {}

  ngOnInit() {
    let observable1$ = Observable.create((observer : any) => {
      observer.next(Math.random());
      if (Math.random() > 0.5) {
        observer.error("Reason for error");
      }
      observer.next(Math.random());
    });

    observable1$.subscribe(
      (data : any) => this.messages.push(`from observable1 subscription1: ${data}`),
      (error : any) => this.messages.push(`OBSERVABLE ERRORED OUT WITH MESSAGE :  ${error}`),
      () => this.messages.push(`observable complete`));
  }

}
