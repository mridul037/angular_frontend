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
 
   return this.http.post('http://206.189.143.221:3527/login',data,httpOptions)
   
     }
    SignUp<T>(
       data:any
    ):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            }),
        };

  return this.http.post('http://206.189.143.221:3527/signup',data,httpOptions)
  
    }
    ForgetPassword<T>(data:any):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        }),
    };
    return this.http.post('http://206.189.143.221:3527/forgetpassword',data,httpOptions);
  
    }


}
