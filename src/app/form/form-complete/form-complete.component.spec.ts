import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompleteComponent } from './form-complete.component';

describe('FormCompleteComponent', () => {
  let component: FormCompleteComponent;
  let fixture: ComponentFixture<FormCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
