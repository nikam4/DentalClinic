import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckuserappointmentsComponent } from './checkuserappointments.component';

describe('CheckuserappointmentsComponent', () => {
  let component: CheckuserappointmentsComponent;
  let fixture: ComponentFixture<CheckuserappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckuserappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckuserappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
