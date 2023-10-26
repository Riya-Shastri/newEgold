import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizedSkusComponent } from './oversized-skus.component';

describe('OversizedSkusComponent', () => {
  let component: OversizedSkusComponent;
  let fixture: ComponentFixture<OversizedSkusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OversizedSkusComponent]
    });
    fixture = TestBed.createComponent(OversizedSkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
