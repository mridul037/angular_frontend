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
export class HomeService {
  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  Banner<T>(): Observable<any> {
    return this.http.get("http://206.189.143.221:3527/home/banner");
  }
  Feature<T>(): Observable<any> {
    return this.http.get("http://206.189.143.221:3527/home/feature");
  }
  
}
