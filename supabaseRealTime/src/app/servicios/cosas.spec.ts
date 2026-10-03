import { TestBed } from '@angular/core/testing';
import { Cosas } from './cosas';

describe('Cosas', () => {
  let service: Cosas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cosas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
