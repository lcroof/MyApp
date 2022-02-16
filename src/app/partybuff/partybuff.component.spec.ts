import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyBuffComponent } from './partybuff.component';

describe('PartybuffComponent', () => {
  let component: PartyBuffComponent;
  let fixture: ComponentFixture<PartyBuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyBuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyBuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
