import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoonComponent } from './dragoon.component';

describe('DragoonComponent', () => {
  let component: DragoonComponent;
  let fixture: ComponentFixture<DragoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
