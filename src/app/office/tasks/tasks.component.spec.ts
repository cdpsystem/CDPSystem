import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffTasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: OffTasksComponent;
  let fixture: ComponentFixture<OffTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
