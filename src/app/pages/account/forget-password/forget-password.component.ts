import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  title = 'reactive forms';
  ForgetForm:FormGroup;
  come:Observable<any>;
  constructor(private authService:AuthService,private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.ForgetForm=this.fb.group({
      email:this.fb.control("")
   });
  }
  handleSubmit() {
    console.log(this.ForgetForm.value);
    this.come=this.authService.ForgetPassword(this.ForgetForm.value)
    this.come.subscribe(x=>(this.router.navigate([`${x.data.link}`])))

}
}
