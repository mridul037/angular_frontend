import { Component, OnInit } from '@angular/core';
import  ProfileService from  '../../../../../src/app/shared/services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
   public name;
  ngOnInit(): void {
    
  }

}
