import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormCompletedComponent } from './view-form-completed.component';

describe('ViewFormCompletedComponent', () => {
  let component: ViewFormCompletedComponent;
  let fixture: ComponentFixture<ViewFormCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFormCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFormCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
