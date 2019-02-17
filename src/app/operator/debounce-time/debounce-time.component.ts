import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {

  /* Discard emitted values that take less than the specified time between output*/
  
  messages: any[] = [];

  constructor() { }

  ngOnInit() {
    const input = document.getElementById('example');
    const example = fromEvent(input, 'keyup').pipe(map((i: any) => i.currentTarget.value));
    const debouncedInput = example.pipe(debounceTime(500));
    const subscribe = debouncedInput.subscribe(val => {this.messages.push(`Debounced Output: ${val}`);
});
  }

}
