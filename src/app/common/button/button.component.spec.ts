import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtndoneComponent } from './button.component';

describe('BtndoneComponent', () => {
  let component: BtndoneComponent;
  let fixture: ComponentFixture<BtndoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtndoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtndoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
