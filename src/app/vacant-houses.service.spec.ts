import { TestBed } from '@angular/core/testing';

import { VacantHousesService } from './vacant-houses.service';

describe('VacantHousesService', () => {
  let service: VacantHousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacantHousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
