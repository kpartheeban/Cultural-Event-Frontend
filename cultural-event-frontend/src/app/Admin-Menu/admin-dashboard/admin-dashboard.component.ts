import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../../event-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private eventService:EventServiceService,private router:Router)
  {

  }
  adminLogOut()
  {
    localStorage.removeItem('admin-token');
    // confirm("Do you want to Log Out");
    alert("Log Out Successfully...");
    this.router.navigateByUrl('/');
  }
  ngOnInit():void{
    if(this.eventService.isAdminLogged()){
 
   
    }
    else{
      this.router.navigate(['admin'])
      alert('You need to log in first to do anything!')
    }

  }
}