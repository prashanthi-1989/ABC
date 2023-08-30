import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCComponent } from './popup-c.component';

describe('PopupCComponent', () => {
  let component: PopupCComponent;
  let fixture: ComponentFixture<PopupCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
