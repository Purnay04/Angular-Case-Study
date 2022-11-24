import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCustComponent } from './first-cust.component';

describe('FirstCustComponent', () => {
  let component: FirstCustComponent;
  let fixture: ComponentFixture<FirstCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
