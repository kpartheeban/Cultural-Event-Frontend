import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {}

  //event booking
  booking(bodyData:any):Observable<any>
  {
    const storedToken = localStorage.getItem('student-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${storedToken}`);
    return this.http.post("https://localhost:7094/api/Student/EventRegistration",bodyData,{responseType:'text',headers:headers})
  }
  
  //login
  studentLogin(bodyData:any):Observable<any>
  {
    return this.http.post("https://localhost:7094/api/Student/Login",bodyData,{responseType:'text'})
  }

  //register
  studentRegister(bodyData:any):Observable<any>
  {
    return this.http.post("https://localhost:7094/api/Student/Register",bodyData,{responseType:"text"})
  }

  //view pass
  pass(pass:string):Observable<any>
  {

    let params = new HttpParams().set('studentId',pass);
    const storedToken = localStorage.getItem('student-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${storedToken}`);
    return this.http.get("https://localhost:7094/api/Student/StudentId", { params: params, headers:headers })
  }
  // student logout
  isStudentLogged():boolean{
    return !!localStorage.getItem('student-token');
  }

  isAdminLogged():boolean{
    return !!localStorage.getItem('admin-token');
  }
}
