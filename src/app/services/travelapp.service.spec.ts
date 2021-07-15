import { TestBed } from '@angular/core/testing';

import { TravelappService } from './travelapp.service';

describe('TravelappService', () => {
  let service: TravelappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
