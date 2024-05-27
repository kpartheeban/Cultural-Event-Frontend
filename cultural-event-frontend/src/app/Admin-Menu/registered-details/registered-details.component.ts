import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../../event-service.service';

@Component({
  selector: 'app-registered-details',
  templateUrl: './registered-details.component.html',
  styleUrl: './registered-details.component.css'
})
export class RegisteredDetailsComponent implements OnInit  {
  s5: any[] = [];
  
  constructor(private eventServiceService:EventServiceService ,private router: Router, private http: HttpClient) { }
  status() {
      this.eventServiceService.getDetails().subscribe((resultData: any) => {
        console.log(resultData);
        if (resultData!=null) {
          this.s5 = resultData; // assign resultData to s5
        }
        else
        {
          alert('Empty List');
        }
      });
  }
  ngOnInit():void{
    this.status();
  }

}
