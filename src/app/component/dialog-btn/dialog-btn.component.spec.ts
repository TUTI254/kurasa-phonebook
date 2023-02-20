import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBtnComponent } from './dialog-btn.component';

describe('DialogBtnComponent', () => {
  let component: DialogBtnComponent;
  let fixture: ComponentFixture<DialogBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
