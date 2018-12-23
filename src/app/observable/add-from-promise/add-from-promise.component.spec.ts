import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFromPromiseComponent } from './add-from-promise.component';

describe('AddFromPromiseComponent', () => {
  let component: AddFromPromiseComponent;
  let fixture: ComponentFixture<AddFromPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFromPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFromPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
