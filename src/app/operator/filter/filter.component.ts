import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  messages: any[] = [];

  constructor() { }

  ngOnInit() {
    const source = from([
      { name: 'Joe', age: 31 },
      { name: 'Bob', age: 25 },
      { name: 'Jill', age: 31 },
      { name: 'John', age: 70 },
      { name: 'Bill', age: 21 },
      { name: 'Rob', age: 99 }]);
    const example = source.pipe(filter(person => person.age >= 30));
    const subscribe = example.subscribe(val => this.messages.push(`Over 30: ${val.name}`));
  }

}
