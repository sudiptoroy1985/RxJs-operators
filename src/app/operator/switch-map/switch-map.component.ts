import { Component, OnInit } from '@angular/core';
import { timer, interval, fromEvent } from 'rxjs';
import { switchMap, mapTo } from 'rxjs/operators';
import { calcBindingFlags } from '@angular/core/src/view/util';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  /* The main difference between switchMap and other flattening operators is the cancelling effect.
  On each emission the previous inner observable (the result of the function you supplied)
  is cancelled and the new observable is subscribed.
  You can remember this by the phrase switch to a new observable. Switch map  allows for only single inner subscriptions*/

  messages: any[] = [];
  constructor() { }

  ngOnInit() {
    const source = fromEvent(document, 'click');
    const example = source.pipe(switchMap((val: any) => interval(3000).pipe(mapTo(' X-' + val.clientX + ' | Y-' + val.clientY))));
    const subscribe = example.subscribe(val => this.messages.push(val));
  }

}
