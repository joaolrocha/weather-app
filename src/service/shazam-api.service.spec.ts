import { TestBed } from '@angular/core/testing';

import { ShazamApiService } from './shazam-api.service';

describe('ShazamApiService', () => {
  let service: ShazamApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShazamApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
