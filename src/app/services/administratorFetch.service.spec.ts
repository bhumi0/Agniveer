import { TestBed } from '@angular/core/testing';

import { AdministratorService } from './administratorFetch.service';

describe('FetchService', () => {
  let service: AdministratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
