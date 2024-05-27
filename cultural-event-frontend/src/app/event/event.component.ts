// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentService } from '../student.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  logOut(){
    localStorage.removeItem('student-token');
    alert("Log Out Successfully...");
    this.router.navigateByUrl('/');
  }
  events: any[] = [];
  constructor(private router: Router,private http:HttpClient,private studentService:StudentService) { }
  
  studentStatus() {
    const storedToken = localStorage.getItem('student-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${storedToken}`);
 
    this.http.get("https://localhost:7094/api/Student/GetAllEvents",{headers:headers})
      .subscribe((resultData: any) => {
        console.log(resultData);
        if (resultData!=null) {
          this.events = resultData; // assign resultData to s5
        }
        else
        {
          alert('Empty List');
        }
      });
  }
  navigateToEventBooking(eventId: number, eventName: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        eventId: eventId,
        eventName: eventName
      }
    };
  
    this.router.navigate(['/event-booking'], navigationExtras);
  }
  ngOnInit():void
  {
    if(this.studentService.isStudentLogged()){

      this.studentStatus();
    }
    else{
      this.router.navigate(['/login'])
      alert('You need to log in first to do anything!')
    }
  }
}
