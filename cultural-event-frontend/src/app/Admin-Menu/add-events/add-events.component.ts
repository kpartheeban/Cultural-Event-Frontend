import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../../event-service.service';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrl: './add-events.component.css'
})
export class AddEventsComponent {

  //eventId:string="";
  eventName:string=""; 
  venue:string=""; 
  description:string="";
  image:string=""
  //time!:Date;

  constructor(private eventServiceService:EventServiceService ,private router:Router,private http:HttpClient)
  {

  }
  addEvents()
  {
    let bodyData={
      "eventName":this.eventName, 
      "venue":this.venue, 
      "description":this.description,
      "image":this.image
    };

    
    this.eventServiceService.addEvent(bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);

      if(resultData =="Event Added Successfully")
      {
        alert("Event Added Successfully");
        this.router.navigateByUrl('/admin-dashboard');
      }
      else{
        alert("Sorry Something went Wrong ");
        
      }
      
    })
  }
}

