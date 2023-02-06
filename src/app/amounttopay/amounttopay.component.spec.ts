import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmounttopayComponent } from './amounttopay.component';

describe('AmounttopayComponent', () => {
  let component: AmounttopayComponent;
  let fixture: ComponentFixture<AmounttopayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmounttopayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmounttopayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
