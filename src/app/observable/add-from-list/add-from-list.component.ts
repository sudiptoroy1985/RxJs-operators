import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-from-list',
  templateUrl: './add-from-list.component.html',
  styleUrls: ['./add-from-list.component.css']
})
export class AddFromListComponent implements OnInit {

  messages: String[] = [];

  constructor() { }

  ngOnInit() {
    let arraySource = from([1, 2, 3, 4, 5]);
    let subscribe = arraySource.subscribe(val => this.messages.push(val.toString()));
  }

}
