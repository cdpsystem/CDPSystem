import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: OffHomeComponent;
  let fixture: ComponentFixture<OffHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
