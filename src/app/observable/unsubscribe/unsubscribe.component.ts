import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  messages: String[] = [];

  constructor() { }

ngOnInit() {
  let timer$ = interval(1000);

  let timer$Subscription = timer$.subscribe((time : any) => this.messages.push(time));

  setTimeout(() => {
    timer$Subscription.unsubscribe();
    this.messages.push('UNSUBSCRIBED'); //manual subscription/unsubscription not considered a good practice
  }, 7000); //timer$ observable stops emitting after 7 seconds
}

}
