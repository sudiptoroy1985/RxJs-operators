import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveObservablesComponent } from './add-remove-observables.component';

describe('AddRemoveObservablesComponent', () => {
  let component: AddRemoveObservablesComponent;
  let fixture: ComponentFixture<AddRemoveObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
