import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventServiceService } from '../../event-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  EmailId:string="";
  Password:string="";

  constructor(private router:Router,private http:HttpClient,private eventServiceService:EventServiceService)
  {

  }
  adminlogin()
  {
    let bodyData={
      "EmailId":this.EmailId,
      "Password":this. Password
    };
    
    this.eventServiceService.loginAdmin(bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);

      const token = resultData;
      localStorage.setItem('admin-token',token);

      if(resultData =="Incorrect Credentials for admin")
      {
      
        alert("Incorrect Credentials for admin");
      }
      else{
        console.log(resultData);
        console.log(token);
        alert("Admin Login Succes");
        this.router.navigate(['admin-dashboard']);
      }
      
    })
  }
}
