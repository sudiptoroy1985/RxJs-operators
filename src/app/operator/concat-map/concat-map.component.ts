import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';
import { concatMap, mapTo, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  messages: any[] = [];

  constructor() { }

  ngOnInit() {
    const source = fromEvent(document, 'click');
    const example = source.pipe(concatMap((val: any) => interval(3000)
                      .pipe(
                        mapTo(' X-' + val.clientX + ' | Y-' + val.clientY),
                        takeUntil(timer(10000))
                        )));
    const subscribe = example.subscribe(val => this.messages.push(val));
  }

}
