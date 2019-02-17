import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreSubjectsComponent } from './what-are-subjects.component';

describe('WhatAreSubjectsComponent', () => {
  let component: WhatAreSubjectsComponent;
  let fixture: ComponentFixture<WhatAreSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatAreSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatAreSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
