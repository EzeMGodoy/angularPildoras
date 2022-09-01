import { TestBed } from '@angular/core/testing';

import { ServicioArrayService } from './servicio-array.service';

describe('ServicioArrayService', () => {
  let service: ServicioArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
