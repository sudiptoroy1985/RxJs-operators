import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-add-remove-observables',
  templateUrl: './add-remove-observables.component.html',
  styleUrls: ['./add-remove-observables.component.css']
})
export class AddRemoveObservablesComponent implements OnInit {

  messages: String[] = [];

  constructor() { }

  ngOnInit() {
    let timer1$ = interval(400);
    let timer2$ = interval(300);
    let timer1$Subscription = timer1$.subscribe((time:any) => this.messages.push(`timer 1 output ${time}`));
    let timer2$Subscription = timer2$.subscribe((time:any) => this.messages.push(`timer 2 output ${time}`));

    timer1$Subscription.add(timer2$Subscription);


    setTimeout(() => {
      timer2$Subscription.unsubscribe();
      this.messages.push('UNSUBSCRIBED TIMER 2')
    }, 1000);

    timer1$Subscription.remove(timer2$Subscription);
    setTimeout(() => {
        timer2$Subscription.unsubscribe();
        this.messages.push('UNSUBSCRIBED TIMER 2')
    }, 1000);
  }

}
