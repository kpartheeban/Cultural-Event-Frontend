import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-pass',
  templateUrl: './view-pass.component.html',
  styleUrls: ['./view-pass.component.css']
})
export class ViewPassComponent implements OnInit {

  pass!: string;
  studentDetails: any;

  constructor(private router: Router, private http: HttpClient) { }
  

  viewPass() {
    let params = new HttpParams().set('studentId', this.pass);
    
    const storedToken = localStorage.getItem('student-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${storedToken}`);

    this.http.get("https://localhost:7094/api/Student/StudentId", { params: params,headers:headers })
      .subscribe((resultData: any) => {
        this.studentDetails = resultData;
      });
  }

  //  to download as pdf
 
  public downloadTablePDF(): void {
    const tableElement = document.getElementById('tableToDownload');
  
    if (tableElement) {
      html2canvas(tableElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Pass.pdf');
      });
    } else {
      console.error('Table element not found');
      alert("Pass not found");
    }
  }

  ngOnInit(): void {
  }
}


