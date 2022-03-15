import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListOfDoctorsComponent } from './admin-list-of-doctors.component';

describe('AdminListOfDoctorsComponent', () => {
  let component: AdminListOfDoctorsComponent;
  let fixture: ComponentFixture<AdminListOfDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListOfDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListOfDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
