import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../shared/shared.module';
import { ListingRoutingModule } from './listing-routing.component';
import {ListingComponent} from './listing/listing.component';
import { CollectionLeftSidebarComponent } from './collection-left-sidebar/collection-left-sidebar.component';
import { GridComponent } from './widgets/grid/grid.component';
import { PaginationComponent } from './widgets/pagination/pagination.component';
import { BrandsComponent } from './widgets/brands/brands.component';
import { ColorsComponent } from './widgets/colors/colors.component';
import { SizeComponent } from './widgets/size/size.component';
import { PriceComponent } from './widgets/price/price.component';
import { Ng5SliderModule } from 'ng5-slider';
import {MatSelectModule} from '@angular/material/select';
@NgModule({

    declarations: [
        ListingComponent,
        CollectionLeftSidebarComponent,
        GridComponent,
        PaginationComponent,
        BrandsComponent,
        ColorsComponent,
        SizeComponent,
        PriceComponent,
        
    ],
    imports: [
      CommonModule,
      GalleryModule.forRoot(),
      SharedModule,
      ListingRoutingModule,
      MatSelectModule,
      Ng5SliderModule
    ]
})
export class ListingModule { }
