import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitValuesComponent } from './emit-values.component';

describe('EmitValuesComponent', () => {
  let component: EmitValuesComponent;
  let fixture: ComponentFixture<EmitValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
