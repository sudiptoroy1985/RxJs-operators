import { AsyncSubjectsComponent } from './subject/async-subjects/async-subjects.component';

import { WhatAreSubjectsComponent } from './subject/what-are-subjects/what-are-subjects.component';
import { AddFromPromiseComponent } from './observable/add-from-promise/add-from-promise.component';
import { AddFromListComponent } from './observable/add-from-list/add-from-list.component';
import { AddFromEventComponent } from './observable/add-from-event/add-from-event.component';
import { AddRemoveObservablesComponent } from './observable/add-remove-observables/add-remove-observables.component';
import { WhatAreObservablesComponent } from './observable/what-are-observables/what-are-observables.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { EmitValuesComponent } from './observable/emit-values/emit-values.component';
import { RendererComponent } from './observable/renderer/renderer.component';
import { ErrorAndCompleteComponent } from './observable/error-and-complete/error-and-complete.component';
import { UnicastComponent } from './observable/unicast/unicast.component';
import { UnsubscribeComponent } from './observable/unsubscribe/unsubscribe.component';
import { SubjectsMulticastComponent } from './subject/subjects-multicast/subjects-multicast.component';
import { SubjectsAsObservableComponent } from './subject/subjects-as-observable/subjects-as-observable.component';
import { ReplaySubjectsComponent } from './subject/replay-subjects/replay-subjects.component';
import { BehaviorSubjectComponent } from './subject/behavior-subject/behavior-subject.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    WhatAreObservablesComponent,
    EmitValuesComponent,
    RendererComponent,
    ErrorAndCompleteComponent,
    UnicastComponent,
    UnsubscribeComponent,
    AddRemoveObservablesComponent,
    AddFromEventComponent,
    AddFromListComponent,
    AddFromPromiseComponent,
    WhatAreSubjectsComponent,
    SubjectsMulticastComponent,
    SubjectsAsObservableComponent,
    ReplaySubjectsComponent,
    BehaviorSubjectComponent,
    AsyncSubjectsComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
