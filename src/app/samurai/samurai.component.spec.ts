import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuraiComponent } from './samurai.component';

describe('SamuraiComponent', () => {
  let component: SamuraiComponent;
  let fixture: ComponentFixture<SamuraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamuraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
