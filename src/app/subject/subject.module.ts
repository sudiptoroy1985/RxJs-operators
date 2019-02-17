import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatAreSubjectsComponent } from './what-are-subjects/what-are-subjects.component';
import { RendererComponent } from '../observable/renderer/renderer.component';
import { SubjectsMulticastComponent } from './subjects-multicast/subjects-multicast.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { SubjectsAsObservableComponent } from './subjects-as-observable/subjects-as-observable.component';
import { ReplaySubjectsComponent } from './replay-subjects/replay-subjects.component';
import { AsyncSubjectsComponent } from './async-subjects/async-subjects.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [WhatAreSubjectsComponent,
    RendererComponent,
    SubjectsMulticastComponent,
    BehaviorSubjectComponent,
    SubjectsAsObservableComponent,
    ReplaySubjectsComponent,
    AsyncSubjectsComponent]
})
export class SubjectModule { }
