import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompletedFormsComponent } from './user-completed-forms.component';

describe('UserCompletedFormsComponent', () => {
  let component: UserCompletedFormsComponent;
  let fixture: ComponentFixture<UserCompletedFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompletedFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompletedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
