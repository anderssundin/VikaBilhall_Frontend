import { TestBed } from '@angular/core/testing';

import { GetSpecificCarService } from './get-specific-car.service';

describe('GetSpecificCarService', () => {
  let service: GetSpecificCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpecificCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
