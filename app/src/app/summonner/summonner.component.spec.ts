import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonnerComponent } from './summonner.component';

describe('SummonnerComponent', () => {
  let component: SummonnerComponent;
  let fixture: ComponentFixture<SummonnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
