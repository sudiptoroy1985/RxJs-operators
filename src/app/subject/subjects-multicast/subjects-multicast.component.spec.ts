import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsMulticastComponent } from './subjects-multicast.component';

describe('SubjectsMulticastComponent', () => {
  let component: SubjectsMulticastComponent;
  let fixture: ComponentFixture<SubjectsMulticastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsMulticastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsMulticastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
