import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { RendererComponent } from '../observable/renderer/renderer.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { FilterComponent } from './filter/filter.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MapComponent,
    RendererComponent,
    SwitchMapComponent,
    MergeMapComponent,
    ConcatMapComponent,
    FilterComponent,
    DebounceTimeComponent,
    ThrottleTimeComponent]
})
export class OperatorModule { }
