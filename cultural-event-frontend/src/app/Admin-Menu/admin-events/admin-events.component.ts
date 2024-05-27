import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../../event-service.service';


@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrl: './admin-events.component.css'
})
export class AdminEventsComponent {

  adminEvents: any[] = [];
  constructor(private eventServiceService : EventServiceService,private router: Router, private http: HttpClient) { }
  showEvents() {
    
      this.eventServiceService.getEvent().subscribe((resultData: any) => {
        console.log(resultData);
        if (resultData!=null) {
          this.adminEvents = resultData; // assign resultData to events
          
        }
      });
  }
  ngOnInit():void{
    this.showEvents();
  }

}
