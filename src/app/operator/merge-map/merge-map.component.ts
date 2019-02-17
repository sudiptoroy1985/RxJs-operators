import { Component, OnInit } from '@angular/core';
import { mergeMap, mapTo } from 'rxjs/operators';
import { of, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  /*  mergeMap allows for multiple inner subscriptions to be active at a time.
   of this, one of the most common use-case for mergeMap is requests that should not be canceled,
   think writes rather than reads */
  messages: any[] = [];
  constructor() { }

  ngOnInit() {
    const source = fromEvent(document, 'click');
    const example = source.pipe(mergeMap((val: any) => interval(3000).pipe(mapTo(' X-' + val.clientX + ' | Y-' + val.clientY))));
    const subscribe = example.subscribe(val => this.messages.push(val));

  }

}
