import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith, delay } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../classes/product';

import { Router, NavigationEnd } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    
    
  constructor(private http: HttpClient,
    private toastrService: ToastrService,private router:Router) { }

    Login<T>(
        data:any
     ):Observable<any>{
         const httpOptions = {
             headers: new HttpHeaders({
                 'Content-Type':  'application/json',
             }),
         };
 
   return this.http.post('http://localhost:3000/login',data,httpOptions)
   
     }
    SignUp<T>(
       data:any
    ):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            }),
        };

  return this.http.post('http://localhost:3000/signup',data,httpOptions)
  
    }
    ForgetPassword<T>(data:any):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        }),
    };
    return this.http.post('http://localhost:3000/forgetpassword',data,httpOptions);
  
    }


}
