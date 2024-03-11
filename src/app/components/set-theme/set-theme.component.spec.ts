import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetThemeComponent } from './set-theme.component';

describe('SetThemeComponent', () => {
  let component: SetThemeComponent;
  let fixture: ComponentFixture<SetThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
