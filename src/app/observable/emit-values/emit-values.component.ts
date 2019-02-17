import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({selector: 'app-emit-values', templateUrl: './emit-values.component.html', styleUrls: ['./emit-values.component.css']})
export class EmitValuesComponent implements OnInit {

  messages: String[] = [];

  constructor() {}

  ngOnInit() {

    let timer$ = Observable.create((observer) => {
      setInterval(() => {
        observer.next(Math.random());
      }, 1000);
    });

    timer$.subscribe((data : any) => this.messages.push(`FROM TIMER SUBSCRIPTION -  ${data}`))
    .pipe()
    ;

  }

}
