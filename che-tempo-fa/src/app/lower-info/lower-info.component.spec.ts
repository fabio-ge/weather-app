import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerInfoComponent } from './lower-info.component';

describe('LowerInfoComponent', () => {
  let component: LowerInfoComponent;
  let fixture: ComponentFixture<LowerInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowerInfoComponent]
    });
    fixture = TestBed.createComponent(LowerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
