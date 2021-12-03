import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackMageComponent } from './black-mage.component';

describe('BlackMageComponent', () => {
  let component: BlackMageComponent;
  let fixture: ComponentFixture<BlackMageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackMageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackMageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
