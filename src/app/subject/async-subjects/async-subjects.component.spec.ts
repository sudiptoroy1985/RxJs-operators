import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubjectsComponent } from './async-subjects.component';

describe('AsyncSubjectsComponent', () => {
  let component: AsyncSubjectsComponent;
  let fixture: ComponentFixture<AsyncSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
