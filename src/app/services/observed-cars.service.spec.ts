import { TestBed } from '@angular/core/testing';

import { ObservedCarsService } from './observed-cars.service';

describe('ObservedCarsService', () => {
  let service: ObservedCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservedCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
