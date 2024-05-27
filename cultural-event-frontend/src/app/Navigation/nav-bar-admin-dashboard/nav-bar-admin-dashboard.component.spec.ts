import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAdminDashboardComponent } from './nav-bar-admin-dashboard.component';

describe('NavBarAdminDashboardComponent', () => {
  let component: NavBarAdminDashboardComponent;
  let fixture: ComponentFixture<NavBarAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarAdminDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
