import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  messages: any[] = [];
  constructor() { }

  ngOnInit() {
    const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(map(val => val + 10));
    const subscribe = example.subscribe(val => this.messages.push(val));
  }

}
