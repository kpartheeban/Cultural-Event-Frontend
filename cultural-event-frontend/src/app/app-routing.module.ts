import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './Student-Menu/login/login.component';
import { RegisterComponent } from './Student-Menu/register/register.component';
import { AdminComponent } from './Admin-Menu/admin/admin.component';
import { AddEventsComponent } from './Admin-Menu/add-events/add-events.component';
import { AdminDashboardComponent } from './Admin-Menu/admin-dashboard/admin-dashboard.component';
import { AdminEventsComponent } from './Admin-Menu/admin-events/admin-events.component';

import { DeleteEventComponent } from './Admin-Menu/delete-event/delete-event.component';
import { RegisteredDetailsComponent } from './Admin-Menu/registered-details/registered-details.component';
import { UpdateEventsComponent } from './Admin-Menu/update-events/update-events.component';
import { NavbarComponent } from './Navigation/navbar-sample/navbar.component';

import { EventBookingComponent } from './Student-Menu/event-booking/event-booking.component';
import { ViewPassComponent } from './Student-Menu/view-pass/view-pass.component';
import { SampleComponent } from './sample/sample.component';

import { NavBarAdminDashboardComponent } from './Navigation/nav-bar-admin-dashboard/nav-bar-admin-dashboard.component';
import { LearMoreComponent } from './lear-more/lear-more.component';

const routes: Routes = [
  
  { path: '',   redirectTo: 'lear-more', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"event",component:EventComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent},
  {path:"add-events",component:AddEventsComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"admin-events",component:AdminEventsComponent},
  
  {path:"delete-event",component:DeleteEventComponent},
  {path:"registered-details",component:RegisteredDetailsComponent},
  {path:"update-events",component:UpdateEventsComponent},
  {path:"navbar",component:NavbarComponent},
  
  
  {path:"event-booking",component:EventBookingComponent},
  {path:"view-pass",component:ViewPassComponent},
  {path:"lear-more",component:LearMoreComponent},

  {path:"sample",component:SampleComponent},
  {path:"nav-bar-admin-dashboard",component:NavBarAdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
