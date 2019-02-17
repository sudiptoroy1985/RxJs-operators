import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectsComponent } from './replay-subjects.component';

describe('ReplaySubjectsComponent', () => {
  let component: ReplaySubjectsComponent;
  let fixture: ComponentFixture<ReplaySubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaySubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaySubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
