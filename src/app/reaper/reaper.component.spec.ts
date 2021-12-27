import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaperComponent } from './reaper.component';

describe('ReaperComponent', () => {
  let component: ReaperComponent;
  let fixture: ComponentFixture<ReaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
