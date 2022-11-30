import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { IndexComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';


@NgModule({
  declarations: [
    IndexComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule
  ]
})
export class ShipmentModule { }
