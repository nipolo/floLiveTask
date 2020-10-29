import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsContainerComponent } from './customer-details-container.component';

describe('CustomerDetailsContainerComponent', () => {
  let component: CustomerDetailsContainerComponent;
  let fixture: ComponentFixture<CustomerDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
