import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import {AuthService} from '../../../shared/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  title = "reactive forms";
  SignupForm: FormGroup;
  come:Observable<any>;
  r:string;
  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.SignupForm = this.fb.group({
      name: this.fb.control(""),
      email: this.fb.control(""),
      password: this.fb.control(""),
      mobile_no: this.fb.control(""),
    });
  }
  handleSubmit() {
    this.come=this.authService.SignUp(this.SignupForm.value)
    this.come.subscribe(x=>this.router.navigate([`${x.data.link}`]))
    
   }
}
