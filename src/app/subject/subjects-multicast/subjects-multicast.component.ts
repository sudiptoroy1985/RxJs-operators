import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects-multicast',
  templateUrl: './subjects-multicast.component.html',
  styleUrls: ['./subjects-multicast.component.css']
})
export class SubjectsMulticastComponent implements OnInit {

  subject: Subject<number> = new Subject<number>();

  messages: String[] = [];

  constructor() { }

  ngOnInit() {

    const subscription1 = this.subject.subscribe(random => this.messages.push(`FROM SUBSCRIPTION 1 - ${random}`));
    const subscription2 = this.subject.subscribe(random => this.messages.push(`FROM SUBSCRIPTION 2 - ${random}`));
    this.subject.next(Math.random());

  }

}
