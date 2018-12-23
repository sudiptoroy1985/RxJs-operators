import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhatAreObservablesComponent} from './what-are-observables/what-are-observables.component';
import { EmitValuesComponent } from './emit-values/emit-values.component';
import { RendererComponent } from './renderer/renderer.component';
import { ErrorAndCompleteComponent } from './error-and-complete/error-and-complete.component';
import { UnicastComponent } from './unicast/unicast.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { AddRemoveObservablesComponent } from './add-remove-observables/add-remove-observables.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WhatAreObservablesComponent, EmitValuesComponent, RendererComponent, ErrorAndCompleteComponent, UnicastComponent, UnsubscribeComponent, AddRemoveObservablesComponent]
})
export class ObservableModule {}
