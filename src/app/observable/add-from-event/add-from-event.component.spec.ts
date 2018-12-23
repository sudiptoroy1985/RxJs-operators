import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFromEventComponent } from './add-from-event.component';

describe('AddFromEventComponent', () => {
  let component: AddFromEventComponent;
  let fixture: ComponentFixture<AddFromEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFromEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
