import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, startWith, delay } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { Product } from "../classes/product";

import { Router, NavigationEnd } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export default class ProfileService {
  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
    private router: Router
  ) {}
 token=localStorage.getItem('accessToken');
  GetProfile<T>(): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${this.token}`, 
        }),
    };
    return this.http.get("http://localhost:3000/profile",httpOptions);
  }
  
  
}
