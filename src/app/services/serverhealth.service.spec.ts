import { TestBed } from '@angular/core/testing';

import { ServerhealthService } from './serverhealth.service';

describe('ServerhealthService', () => {
  let service: ServerhealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerhealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
