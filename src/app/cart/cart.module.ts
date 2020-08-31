import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import {CartComponent} from './cart/cart.component';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
      CommonModule,
      GalleryModule.forRoot(),
      SharedModule,
      CartRoutingModule
    ]
})
export class CartModule { }
