import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScChild1Component } from './sc-child1.component';

describe('ScChild1Component', () => {
  let component: ScChild1Component;
  let fixture: ComponentFixture<ScChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScChild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
