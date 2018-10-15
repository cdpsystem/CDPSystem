import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: OffCalendarComponent;
  let fixture: ComponentFixture<OffCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
