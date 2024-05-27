import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../../event-service.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrl: './delete-event.component.css'
})
export class DeleteEventComponent {

  Id!: number;
 
 
  constructor(private eventServiceService : EventServiceService,private router: Router, private http: HttpClient) { }
 
  delete() {
    
  this.eventServiceService.deleteEvent(this.Id).subscribe((resultData: any) => {
    if (resultData === "Successfully Deleted") {
      alert("Successfully Deleted");
    }
    else {
      alert("Enter the valid Route ID");
    }
  });
 
 
  }
 
 
  ngOnInit(): void {
  }
 
}
