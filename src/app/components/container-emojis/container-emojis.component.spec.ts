import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerEmojisComponent } from './container-emojis.component';

describe('ContainerEmojisComponent', () => {
  let component: ContainerEmojisComponent;
  let fixture: ComponentFixture<ContainerEmojisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerEmojisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
