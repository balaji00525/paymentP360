import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeapaymentComponent } from './makeapayment.component';

describe('MakeapaymentComponent', () => {
  let component: MakeapaymentComponent;
  let fixture: ComponentFixture<MakeapaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeapaymentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeapaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
