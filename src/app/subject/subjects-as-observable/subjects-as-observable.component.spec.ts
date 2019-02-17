import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsAsObservableComponent } from './subjects-as-observable.component';

describe('SubjectsAsObservableComponent', () => {
  let component: SubjectsAsObservableComponent;
  let fixture: ComponentFixture<SubjectsAsObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsAsObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsAsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
