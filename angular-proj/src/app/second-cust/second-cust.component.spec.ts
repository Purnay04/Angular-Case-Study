import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCustComponent } from './second-cust.component';

describe('SecondCustComponent', () => {
  let component: SecondCustComponent;
  let fixture: ComponentFixture<SecondCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
