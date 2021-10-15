import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedMageComponent } from './red-mage.component';

describe('RedMageComponent', () => {
  let component: RedMageComponent;
  let fixture: ComponentFixture<RedMageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedMageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedMageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
