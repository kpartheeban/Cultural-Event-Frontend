import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventServiceService } from '../../event-service.service';


@Component({
  selector: 'app-update-events',
  templateUrl: './update-events.component.html',
  styleUrl: './update-events.component.css'
})
export class UpdateEventsComponent {

  eventId!: number;
  eventName: string = "";
  venue: string="";
  description:string="";
  image:string=''


 
  constructor(private router:Router,private http:HttpClient,private eventServiceService:EventServiceService) { }
  updateEvents()
  {
    let bodyData={
      "eventId":this.eventId,
      "eventName":this.eventName,
      "venue":this.venue,
      "description":this.description,
      "image":this.image
    };
   
    this.eventServiceService.updateEvent(bodyData).subscribe((resultData:any)=>
     {
       console.log(resultData);
      
     });
    alert("Successfully Updated!!");
    this.router.navigateByUrl('/admin/admin-dashboard');
 
  }
 
  ngOnInit(): void {
  }
}
