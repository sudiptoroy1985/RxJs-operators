import { debounceTime, throttleTime, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.css']
})
export class ThrottleTimeComponent implements OnInit {

  /* Emit latest value when specified duration has passed. */
  messages: any[] = [];

  constructor() { }

  ngOnInit() {
    const input = document.getElementById('example');
    const example = fromEvent(input, 'keyup').pipe(map((i: any) => i.currentTarget.value));
    const debouncedInput = example.pipe(throttleTime(2000));
    const subscribe = debouncedInput.subscribe(val => {this.messages.push(`Throttled Output: ${val}`);
});
  }

}
