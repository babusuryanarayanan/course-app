import { TestBed } from '@angular/core/testing';

import { OrderGuardService } from './order-guard.service';

describe('OrderGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderGuardService = TestBed.get(OrderGuardService);
    expect(service).toBeTruthy();
  });
});
