import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: OffFooterComponent;
  let fixture: ComponentFixture<OffFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
