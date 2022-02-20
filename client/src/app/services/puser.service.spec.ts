import { TestBed } from '@angular/core/testing';

import { PuserService } from './puser.service';

describe('PuserService', () => {
  let service: PuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
