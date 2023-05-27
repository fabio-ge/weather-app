import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperInfoComponent } from './upper-info.component';

describe('UpperInfoComponent', () => {
  let component: UpperInfoComponent;
  let fixture: ComponentFixture<UpperInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperInfoComponent]
    });
    fixture = TestBed.createComponent(UpperInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
