import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridListComponent } from './user-grid-list.component';

describe('UserGridListComponent', () => {
  let component: UserGridListComponent;
  let fixture: ComponentFixture<UserGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGridListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
