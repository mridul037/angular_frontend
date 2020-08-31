import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'reactive forms';
  LoginForm:FormGroup;
  come:Observable<any>;
  constructor(private authService:AuthService,private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      email:this.fb.control(""),
      password:this.fb.control(""),
   });
  
  }

  handleSubmit() {
    console.log(this.LoginForm.value);
    this.come=this.authService.Login(this.LoginForm.value)

    this.come.subscribe(x=>{console.log(x.data.link)
      localStorage.setItem('accessToken',`${x.data.accessToken}` );
      localStorage.setItem('refreshToken',`${x.data.refreshToken}` );
      this.router.navigate([`${x.data.link}`])
      

  })
}

}
