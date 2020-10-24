import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCardObservedComponent } from './car-card-observed.component';

describe('CarCardObservedComponent', () => {
  let component: CarCardObservedComponent;
  let fixture: ComponentFixture<CarCardObservedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCardObservedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCardObservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
