import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicastComponent } from './unicast.component';

describe('UnicastComponent', () => {
  let component: UnicastComponent;
  let fixture: ComponentFixture<UnicastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
