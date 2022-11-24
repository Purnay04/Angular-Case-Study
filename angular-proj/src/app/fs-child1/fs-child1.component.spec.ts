import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsChild1Component } from './fs-child1.component';

describe('FsChild1Component', () => {
  let component: FsChild1Component;
  let fixture: ComponentFixture<FsChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsChild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FsChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
