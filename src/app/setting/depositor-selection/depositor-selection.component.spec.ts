import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositorSelectionComponent } from './depositor-selection.component';

describe('DepositorSelectionComponent', () => {
  let component: DepositorSelectionComponent;
  let fixture: ComponentFixture<DepositorSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositorSelectionComponent]
    });
    fixture = TestBed.createComponent(DepositorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
