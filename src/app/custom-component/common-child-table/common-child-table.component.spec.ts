import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChildTableComponent } from './common-child-table.component';

describe('CommonChildTableComponent', () => {
  let component: CommonChildTableComponent;
  let fixture: ComponentFixture<CommonChildTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonChildTableComponent]
    });
    fixture = TestBed.createComponent(CommonChildTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
