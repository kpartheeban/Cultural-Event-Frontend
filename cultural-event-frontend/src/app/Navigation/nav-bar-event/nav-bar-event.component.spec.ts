import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEventComponent } from './nav-bar-event.component';

describe('NavBarEventComponent', () => {
  let component: NavBarEventComponent;
  let fixture: ComponentFixture<NavBarEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
