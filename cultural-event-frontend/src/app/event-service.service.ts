import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http:HttpClient) { }
  //Registered Details
  getDetails():Observable<any>{
    const storedToken = localStorage.getItem('admin-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${storedToken}`);
 
    return this.http.get("https://localhost:7094/api/Admin/RegisteredDetails",{headers:headers});
  }
  //show event
  getEvent():Observable<any>{
    const storedToken = localStorage.getItem('admin-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${storedToken}`);
 
    return this.http.get("https://localhost:7094/api/Admin/Events",{headers:headers});
  }
  //delete event
  deleteEvent(Id:number):Observable<any>{
      let params = new HttpParams().set('id',Id)
      const storedToken = localStorage.getItem('admin-token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${storedToken}`);
      return this.http.delete("https://localhost:7094/api/Admin/DeleteEvent", { params: params, responseType:'text',headers:headers})
  }
  //add event
  addEvent(bodyData:any):Observable<any>{
    const storedToken = localStorage.getItem('admin-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${storedToken}`);

    return this.http.post("https://localhost:7094/api/Admin/AddEvents",bodyData,{responseType:'text',headers:headers})
  }
  //admin login
  loginAdmin(bodyData:any):Observable<any>{
    return this.http.post("https://localhost:7094/api/Admin/Login",bodyData,{responseType:'text'});
  }

  //update event
  updateEvent(bodyData:any):Observable<any>
  {
    const storedToken = localStorage.getItem('admin-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${storedToken}`);
 
    return this.http.put("https://localhost:7094/api/Admin/UpdateEvents",bodyData,{responseType: 'json',headers:headers})
  }

  isAdminLogged():boolean{
    return !!localStorage.getItem('admin-token');
  }
}
