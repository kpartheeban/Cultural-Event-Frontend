import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrl: './event-booking.component.css'
})
export class EventBookingComponent {

  // eventId:string="";
  studentId:string="";
  eventName:string=""; 
  eventId!:number; 
  //time!:Date;

  
  constructor(private router:Router,private http:HttpClient, private studentService:StudentService,private route:ActivatedRoute)
  {

  }
  eventBooking()
  {
    let bodyData={
      'studentId':this.studentId,
      'name':this.eventName, 
      "eventId":this.eventId, 
      
    };
    this.studentService.booking(bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);

      if(resultData =="Event Registration Successfully Completed")
      {
        alert("Event Registration Successfully Completed");
        this.router.navigateByUrl('/view-pass');
      }
      else if(resultData == "StudentId and EventName already Exist")
      {
        alert("StudentId and EventName already Registered");
      }
      else{
        alert("Check Your Event Id");
        
      }
      
    })
  }
  ngOnInit():void{
    if(this.studentService.isStudentLogged()){
      
      this.route.queryParams.subscribe(params => {
        this.eventId = params['eventId'];
        this.eventName = params['eventName'];
      });
    }
    else{
      this.router.navigate(['/login'])
      alert('You need to log in first to do anything!')
    }
  }

}
