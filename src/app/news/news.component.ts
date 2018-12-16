import { ApiService } from './../api.service';
import {Component, OnInit} from '@angular/core';

import {Observable, from, combineLatest} from 'rxjs';
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

  constructor(private service: ApiService<Item>) {}

  item$ : Observable<any>;

  ngOnInit() {
    this.item$ = this.service.get(`${environment.itemUrl}8863.json`)
                  .pipe(
                   mergeMap(item => {
                    const childItem$Array = item.kids.map(itemId => this.loadChildItems(itemId));
                    return combineLatest(childItem$Array).pipe(
                      map(childItem$Array => ({childItem$Array, item}))
                    );
                }),
                );
  }

  loadChildItems(id) {
    return this.service.get(`${environment.itemUrl}${id}.json`)
  }
}


