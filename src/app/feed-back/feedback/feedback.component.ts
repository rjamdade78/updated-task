import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Iuser } from 'src/app/common/user';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})


export class FeedbackComponent implements OnInit {
  public feedbackForm !: FormGroup
  constructor(private formbuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.feedbackForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      feedback: ['', Validators.required]
    })
  }
  onsubmit(data: Iuser) {
    localStorage.setItem('form-data', JSON.stringify(this.feedbackForm.value));
    this.feedbackForm.reset()

  }
  backtoproduct() {
    this.router.navigate(['/product'])
  }
  logout() {
    this.router.navigate(['login'])
  }
  fbsubmit() {
    alert('Thank You For FeedBack')
  }
  get name() {
    return this.feedbackForm.get('name')
  }
  get email() {
    return this.feedbackForm.get('email')
  }
  get number() {
    return this.feedbackForm.get('number')
  }
  get feedback() {
    return this.feedbackForm.get('feedback')
  }

}
