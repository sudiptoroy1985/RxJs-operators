import { ReplaySubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay-subjects',
  templateUrl: './replay-subjects.component.html',
  styleUrls: ['./replay-subjects.component.css']
})
export class ReplaySubjectsComponent implements OnInit {
  messages: String[] = [];
  constructor() { }

  ngOnInit() {
    const mySubject = new ReplaySubject(2);
    mySubject.next(1);
    mySubject.next(2);
    mySubject.next(3);
    mySubject.next(4);
    mySubject.subscribe(x => {this.messages.push('From 1st subscription :' + x); });
    mySubject.next(5);
    mySubject.subscribe(x => {this.messages.push('From 2nd subscription :' + x); });
  }
}
