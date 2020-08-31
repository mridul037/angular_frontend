import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingComponent} from './listing/listing.component';
import { CollectionLeftSidebarComponent } from './collection-left-sidebar/collection-left-sidebar.component';

const routes: Routes = [
    { 
      path: '', 
      component: ListingComponent
    },{
      path: 'collection/left/sidebar',
      component: CollectionLeftSidebarComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class ListingRoutingModule { 
    constructor(){}

  


  }
  
  