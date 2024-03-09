import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmojiComponent } from './view-emoji.component';

describe('ViewEmojiComponent', () => {
  let component: ViewEmojiComponent;
  let fixture: ComponentFixture<ViewEmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEmojiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
