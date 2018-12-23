import { ApiService } from './../api.service';
import {Component, OnInit} from '@angular/core';

import {Observable, from, combineLatest, interval, Subscription, ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll,
  shareReplay,
  mergeMap
} from 'rxjs/operators';
import { Item } from './Item';
import { environment } from 'src/environments/environment';

@Component(
  {selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']}
  )
export class NewsComponent implements OnInit {

  constructor(private itemService: ApiService<Item>) {}

  item$ : Observable<any>;

  ngOnInit() {

    let timer1$ = interval(400);
    let timer2$ = interval(300);

    let timer1$Subscription = timer1$.subscribe((time:any) => console.log(`timer 1 output ${time}`));
    let timer2$Subscription = timer2$.subscribe((time:any) => console.log(`timer 2 output ${time}`));

    timer1$Subscription.add(timer2$Subscription);

    setTimeout(() => {
      timer1$Subscription.unsubscribe();
    }, 1000);

    timer1$Subscription.remove(timer2$Subscription);

    setTimeout(() => {
      timer2$Subscription.unsubscribe();
    }, 1500);




    // let subject = new Subject();
    // let observable2$ = subject.asObservable();
    // observable2$.subscribe((data:any) => console.log(`from subject1 subscription1: ${data}`));
    // observable2$.subscribe((data:any) => console.log(`from subject1 subscription2: ${data}`));
    // subject.next(Math.random());
  }

  private getComments() {
    this.item$ = this.itemService.get(`8863.json`)
      .pipe(mergeMap(item => {
        const childItem$Array = item.kids.map(itemId => this.itemService.get(`${itemId}.json`));
        return combineLatest(childItem$Array).pipe(map(childItem$Array => ({ childItem$Array, item })));
      }));
  }
}


