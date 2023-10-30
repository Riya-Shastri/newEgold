import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongAddressComponent } from './wrong-address.component';

describe('WrongAddressComponent', () => {
  let component: WrongAddressComponent;
  let fixture: ComponentFixture<WrongAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrongAddressComponent]
    });
    fixture = TestBed.createComponent(WrongAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
