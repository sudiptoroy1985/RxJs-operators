import {Component, OnInit} from '@angular/core';
import {  interval, fromEvent, from } from 'rxjs';
import { take, throttle, throttleTime } from 'rxjs/operators';

@Component({selector: 'app-add-from-event', templateUrl: './add-from-event.component.html', styleUrls: ['./add-from-event.component.css']})
export class AddFromEventComponent implements OnInit {

  messages: String[] = [];

  constructor() {}

  ngOnInit() {
    let mouseMoveObservable$ = fromEvent(document, 'mousemove').pipe(throttleTime(200));
    let mouseMoveSubscription = mouseMoveObservable$.subscribe((x : any) => this.messages.push(`X COORDINATE - ${x.clientX} Y COORDINATE - ${x.clientY}`));

  }

}
