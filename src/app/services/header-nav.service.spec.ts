import { TestBed } from '@angular/core/testing';

import { HeaderNavService } from './header-nav.service';

describe('HeaderNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderNavService = TestBed.get(HeaderNavService);
    expect(service).toBeTruthy();
  });
});
