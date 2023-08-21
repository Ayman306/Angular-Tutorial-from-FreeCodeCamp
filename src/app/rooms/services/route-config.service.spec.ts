import { TestBed } from '@angular/core/testing';

import { RouteConfigService } from './route-config.service';

describe('RouteConfigService', () => {
  let service: RouteConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
