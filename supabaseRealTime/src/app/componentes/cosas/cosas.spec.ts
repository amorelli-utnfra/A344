import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cosas } from './cosas';

describe('Cosas', () => {
  let component: Cosas;
  let fixture: ComponentFixture<Cosas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cosas],
    }).compileComponents();

    fixture = TestBed.createComponent(Cosas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
