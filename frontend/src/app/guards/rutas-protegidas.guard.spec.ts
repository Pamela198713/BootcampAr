import { TestBed } from '@angular/core/testing';

import { RutasProtegidasGuard } from './rutas-protegidas.guard';

describe('RutasProtegidasGuard', () => {
  let guard: RutasProtegidasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RutasProtegidasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
