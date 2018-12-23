import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { from , interval } from 'rxjs';

@Component({
  selector: 'app-add-from-promise',
  templateUrl: './add-from-promise.component.html',
  styleUrls: ['./add-from-promise.component.css']
})
export class AddFromPromiseComponent implements OnInit {

  messages: String[] = [];

  constructor() { }

  ngOnInit() {
    let news$ = from(
                  fetch("https://hacker-news.firebaseio.com/v0/item/18744464.json")
                    .then(response => response.json())
                   );

    let newsSubscription = news$.subscribe(response => {
      this.messages.push(`${response.title} By ${response.by} - ${response.url}`)
    });
  }

}
