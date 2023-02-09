import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtncancelComponent } from './btncancel.component';

describe('BtncancelComponent', () => {
  let component: BtncancelComponent;
  let fixture: ComponentFixture<BtncancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtncancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtncancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
