import { TestBed } from '@angular/core/testing';

import { AgniveerService } from './agniveerFetch.service';

describe('FetchService', () => {
  let service: AgniveerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgniveerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
