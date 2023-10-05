import { TestBed } from '@angular/core/testing';

import { OfficerService } from './officerFetch.service';

describe('FetchService', () => {
  let service: OfficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
