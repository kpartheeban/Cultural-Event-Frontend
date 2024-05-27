import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}
  logOut(){
    localStorage.removeItem('student-token');
    alert("Log Out Successfully...");
    this.router.navigateByUrl('/');
  }
}
