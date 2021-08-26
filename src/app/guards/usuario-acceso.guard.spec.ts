import { TestBed } from '@angular/core/testing';

import { UsuarioAccesoGuard } from './usuario-acceso.guard';

describe('UsuarioAccesoGuard', () => {
  let guard: UsuarioAccesoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioAccesoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
