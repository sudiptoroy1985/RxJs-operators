import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAndCompleteComponent } from './error-and-complete.component';

describe('ErrorAndCompleteComponent', () => {
  let component: ErrorAndCompleteComponent;
  let fixture: ComponentFixture<ErrorAndCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorAndCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAndCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
