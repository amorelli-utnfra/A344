import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CosasRealtime } from './cosas-realtime';

describe('CosasRealtime', () => {
  let component: CosasRealtime;
  let fixture: ComponentFixture<CosasRealtime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosasRealtime],
    }).compileComponents();

    fixture = TestBed.createComponent(CosasRealtime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
