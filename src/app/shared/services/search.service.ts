import { Router, NavigationEnd } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: "root",
  })

export class SearchService{
    constructor(
        private http: HttpClient,
        private router: Router
      ) {}
      public cat:any;


      GetCategory<T>(): Observable<any>{
         return this.http.get("http://localhost:3000/search/category");
         
      }
      GetSubCategory<T>(
          data:any
      ):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            }),
        };

         return this.http.post("http://localhost:3000/search/subcategory",data,httpOptions);

      }


     




    }
    