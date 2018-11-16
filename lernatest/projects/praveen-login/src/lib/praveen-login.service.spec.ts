import { TestBed } from '@angular/core/testing';

import { PraveenLoginService } from './praveen-login.service';

describe('PraveenLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PraveenLoginService = TestBed.get(PraveenLoginService);
    expect(service).toBeTruthy();
  });
});
