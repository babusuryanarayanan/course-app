import { TestBed } from '@angular/core/testing';

import { MyhttpinterceptorService } from './myhttpinterceptor.service';

describe('MyhttpinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyhttpinterceptorService = TestBed.get(MyhttpinterceptorService);
    expect(service).toBeTruthy();
  });
});
