import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unicast',
  templateUrl: './unicast.component.html',
  styleUrls: ['./unicast.component.css']
})
export class UnicastComponent implements OnInit {

  messages: String[] = [];

  constructor() { }

ngOnInit() {
  let observable1$ = Observable.create((observer : any) => {
    observer.next(Math.random());
  });

  observable1$.subscribe((data : any) => this.messages.push(`FROM OBSERVABLE1 SUBSCRIPTION 1 - ${data}`)); // subscription 1

  observable1$.subscribe((data : any) => this.messages.push(`FROM OBSERVABLE1 SUBSCRIPTION 2 - ${data}`)); // subscription 2
}

}
