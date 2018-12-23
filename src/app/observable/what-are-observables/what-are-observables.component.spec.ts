import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreObservablesComponent } from './what-are-observables.component';

describe('WhatAreObservablesComponent', () => {
  let component: WhatAreObservablesComponent;
  let fixture: ComponentFixture<WhatAreObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatAreObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatAreObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
