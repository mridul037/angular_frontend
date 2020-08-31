import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';


import { SliderComponent } from './widgets/slider/slider.component';
import { BlogComponent } from './widgets/blog/blog.component';
import { LogoComponent } from './widgets/logo/logo.component';
import { InstagramComponent } from './widgets/instagram/instagram.component';
import { ServicesComponent } from './widgets/services/services.component';
import { CollectionComponent } from './widgets/collection/collection.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
 
    // Widgest Components
    SliderComponent,
    BlogComponent,
    LogoComponent,
    InstagramComponent,
    ServicesComponent,
    CollectionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
