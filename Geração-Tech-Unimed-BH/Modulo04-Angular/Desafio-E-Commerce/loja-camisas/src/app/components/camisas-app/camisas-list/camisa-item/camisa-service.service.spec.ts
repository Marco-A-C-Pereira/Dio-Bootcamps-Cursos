import { TestBed } from '@angular/core/testing';

import { CamisaServiceService } from './camisa-service.service';

describe('CamisaServiceService', () => {
  let service: CamisaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
