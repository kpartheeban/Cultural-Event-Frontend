import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private studentService: StudentService) {
    this.loginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.loginForm.valid) {
      const bodyData = {
        "studentEmail": this.loginForm.value.emailId,
        "password": this.loginForm.value.password
      };

      this.studentService.studentLogin(bodyData).subscribe((resultData: any) => {
        console.log(resultData);
        const token = resultData;
        localStorage.setItem('student-token', token);
        if (resultData == "Account Doesn't Exist") {
          alert("Account Does not Exist.");
        } else {
          alert("Student Login Succes");
          this.router.navigateByUrl('home');
        }
      });
    }
  }
}