import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../shared/shared.module';
import {ProductsComponent} from '../products/products/products.component';
import {ProductsRoutingModule} from './product-routing.component';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
      CommonModule,
      GalleryModule.forRoot(),
      SharedModule,
      ProductsRoutingModule
    ]
})
export class ProductsModule{ }
