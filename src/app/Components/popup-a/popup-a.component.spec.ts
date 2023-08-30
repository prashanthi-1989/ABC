import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAComponent } from './popup-a.component';

describe('PopupAComponent', () => {
  let component: PopupAComponent;
  let fixture: ComponentFixture<PopupAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
