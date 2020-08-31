import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from '../products/products/products.component';
import { Resolver } from '../shared/services/resolver.service';
const routes: Routes = [
    { 
      path: ':slug', 
      component: ProductsComponent,
      resolve: {
        data: Resolver
      }
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductsRoutingModule { }
  