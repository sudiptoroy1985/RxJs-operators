import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subjects',
  templateUrl: './async-subjects.component.html',
  styleUrls: ['./async-subjects.component.css']
})
export class AsyncSubjectsComponent implements OnInit {
  messages: String[] = [];
  constructor() { }

  ngOnInit() {
    const subject = new AsyncSubject();
    subject.subscribe((data) => {this.messages.push('Subscriber 1: ' + data); });
    subject.next(Math.random());
    subject.next(Math.random());
    subject.next(Math.random());
    subject.subscribe((data) => {this.messages.push('Subscriber 2: ' + data); });
    subject.next(Math.random());
    subject.complete();

  }

}
