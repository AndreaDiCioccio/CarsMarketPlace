import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBuyedCarsComponent } from './container-buyed-cars.component';

describe('ContainerBuyedCarsComponent', () => {
  let component: ContainerBuyedCarsComponent;
  let fixture: ComponentFixture<ContainerBuyedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBuyedCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBuyedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
