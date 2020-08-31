import { Component, OnInit } from '@angular/core';
import  ProfileService from  '../../../../../src/app/shared/services/profile.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public openDashboard: boolean = false;
  public name;
  public email;
  constructor(public profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.GetProfile().subscribe(val=>{
      console.log(val);
      this.name=val.data.name
      this.email=val.data.email
  })
  }

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }

}
