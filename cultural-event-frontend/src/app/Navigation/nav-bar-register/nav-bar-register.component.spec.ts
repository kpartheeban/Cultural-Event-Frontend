import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRegisterComponent } from './nav-bar-register.component';

describe('NavBarRegisterComponent', () => {
  let component: NavBarRegisterComponent;
  let fixture: ComponentFixture<NavBarRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
