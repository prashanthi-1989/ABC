import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBComponent } from './popup-b.component';

describe('PopupBComponent', () => {
  let component: PopupBComponent;
  let fixture: ComponentFixture<PopupBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
