import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-what-are-subjects',
  templateUrl: './what-are-subjects.component.html',
  styleUrls: ['./what-are-subjects.component.css']
})
export class WhatAreSubjectsComponent implements OnInit {

  subject: Subject<number> = new Subject<number>();

  messages: String[] = [];

   ngOnInit() {
     
     this.subject.next(1);

     const subscription1 = this.subject.subscribe(x => { this.messages.push('From Subscription1: ' + x.toString());});

     this.subject.next(2);

     const subscription2 = this.subject.subscribe(x => {this.messages.push('From Subscription2: ' + x.toString());});

     this.subject.next(3);

     subscription1.unsubscribe();

     this.subject.next(4);
   }


}


