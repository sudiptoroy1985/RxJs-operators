import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-subjects-as-observable',
  templateUrl: './subjects-as-observable.component.html',
  styleUrls: ['./subjects-as-observable.component.css']
})
export class SubjectsAsObservableComponent implements OnInit {

  messages: String[] = [];

  private privateSubject: Subject<String> = new Subject<String>();
  public exposedAsObservable: Observable<String>;

  constructor() {
    this.exposedAsObservable = this.privateSubject.asObservable();
  }

  ngOnInit() {
    this.exposedAsObservable.subscribe(message => this.messages.push(message));
    this.privateSubject.next('Hello');
  }

}
