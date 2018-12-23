import { AddFromPromiseComponent } from './../observable/add-from-promise/add-from-promise.component';
import { AddFromEventComponent } from './../observable/add-from-event/add-from-event.component';
import { AddRemoveObservablesComponent } from './../observable/add-remove-observables/add-remove-observables.component';
import { UnicastComponent } from './../observable/unicast/unicast.component';
import { WhatAreObservablesComponent } from './../observable/what-are-observables/what-are-observables.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmitValuesComponent } from '../observable/emit-values/emit-values.component';
import { ErrorAndCompleteComponent } from '../observable/error-and-complete/error-and-complete.component';
import { UnsubscribeComponent } from '../observable/unsubscribe/unsubscribe.component';
import { AddFromListComponent } from '../observable/add-from-list/add-from-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/whatareobservables', pathMatch: 'full' },
  { path: 'whatareobservables', component: WhatAreObservablesComponent },
  { path: 'emitValues', component: EmitValuesComponent },
  { path: 'errorAndComplete', component: ErrorAndCompleteComponent },
  { path: 'unicast', component: UnicastComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent },
  { path: 'addRemove', component: AddRemoveObservablesComponent },
  { path: 'addFromEvent', component: AddFromEventComponent },
  { path: 'addFromList', component: AddFromListComponent },
  { path: 'addFromList', component: AddFromListComponent },
  { path: 'addFromPromise', component: AddFromPromiseComponent }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
