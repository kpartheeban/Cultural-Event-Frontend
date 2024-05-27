import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearMoreComponent } from './lear-more.component';

describe('LearMoreComponent', () => {
  let component: LearMoreComponent;
  let fixture: ComponentFixture<LearMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
