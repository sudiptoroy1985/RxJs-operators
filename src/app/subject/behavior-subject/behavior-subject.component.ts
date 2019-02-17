import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {
  messages: String[] = [];
  constructor() { }

  ngOnInit() {
    const mySubject = new BehaviorSubject(2);
    mySubject.subscribe(x => {this.messages.push('From 1st subscription :' + x); });
    mySubject.next(5);
    mySubject.subscribe(x => {this.messages.push('From 2nd subscription :' + x); });
  }

}
