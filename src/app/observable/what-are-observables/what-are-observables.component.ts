import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component(
  {selector: 'app-what-are-observables',
  templateUrl: './what-are-observables.component.html',
  styleUrls: ['./what-are-observables.component.css']}
)
export class WhatAreObservablesComponent implements OnInit{

  messages: String[] = [];

  constructor() {

  }

  ngOnInit() {
    let observable1$ = Observable.create((observer : any) => {
      observer.next(Math.random());
    });

    let subscription = observable1$.subscribe(data => this.messages.push(data));
    //subscribing to an  Observable creates a  Subscription.
  }




}
