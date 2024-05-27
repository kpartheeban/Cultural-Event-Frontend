import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentService } from '../../student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private router: Router,
    private http: HttpClient,
    private studentService: StudentService,
    private formBuilder: FormBuilder){

    this.registerForm = this.formBuilder.group({
      studentId: ['', Validators.required],
      studentName: ['', Validators.required],
      studentEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dept: ['', Validators.required],
      year: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {

    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }
  save() {
    if (this.registerForm.valid) {
      const bodyData = this.registerForm.value;
      this.studentService.studentRegister(bodyData).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Student Registered Successfully");
        this.router.navigateByUrl("/login");
      });
    }
  }
}