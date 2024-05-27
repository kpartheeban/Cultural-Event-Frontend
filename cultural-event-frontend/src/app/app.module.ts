import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Student-Menu/login/login.component';
import { RegisterComponent } from './Student-Menu/register/register.component';
import { AdminComponent } from './Admin-Menu/admin/admin.component';
import { EventComponent } from './event/event.component';
import { NavbarComponent } from './Navigation/navbar-sample/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEventsComponent } from './Admin-Menu/add-events/add-events.component';
import { UpdateEventsComponent } from './Admin-Menu/update-events/update-events.component';
import { RegisteredDetailsComponent } from './Admin-Menu/registered-details/registered-details.component';
import { AdminEventsComponent } from './Admin-Menu/admin-events/admin-events.component';

import { DeleteEventComponent } from './Admin-Menu/delete-event/delete-event.component';

import { AdminDashboardComponent } from './Admin-Menu/admin-dashboard/admin-dashboard.component';
import { EventBookingComponent } from './Student-Menu/event-booking/event-booking.component';
import { ViewPassComponent } from './Student-Menu/view-pass/view-pass.component';
import { SampleComponent } from './sample/sample.component';
import { NavBarLoginComponent } from './Navigation/nav-bar-login/nav-bar-login.component';
import { NavBarRegisterComponent } from './Navigation/nav-bar-register/nav-bar-register.component';
import { NavBarAdminComponent } from './Navigation/nav-bar-admin/nav-bar-admin.component';

import { NavBarEventComponent } from './Navigation/nav-bar-event/nav-bar-event.component';
import { NavBarAdminDashboardComponent } from './Navigation/nav-bar-admin-dashboard/nav-bar-admin-dashboard.component';
import { LearMoreComponent } from './lear-more/lear-more.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    EventComponent,
    NavbarComponent,
    AddEventsComponent,
    UpdateEventsComponent,
    RegisteredDetailsComponent,
    AdminEventsComponent,

    DeleteEventComponent,

    AdminDashboardComponent,
    EventBookingComponent,
    ViewPassComponent,
    SampleComponent,
    NavBarLoginComponent,
    NavBarRegisterComponent,
    NavBarAdminComponent,
   
    NavBarEventComponent,
    NavBarAdminDashboardComponent,
    LearMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
