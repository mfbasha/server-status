import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbuttonComponent } from './appbutton.component';

describe('AppbuttonComponent', () => {
  let component: AppbuttonComponent;
  let fixture: ComponentFixture<AppbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
