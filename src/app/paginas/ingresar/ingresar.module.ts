import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresarRoutingModule } from './ingresar-routing.module';
import { IngresarComponent } from './ingresar.component';


@NgModule({
  declarations: [
    IngresarComponent
  ],
  imports: [
    CommonModule,
    IngresarRoutingModule
  ]
})
export class IngresarModule { }
