import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component'; // <-- Añade esta línea

@NgModule({
  declarations: [InicioComponent], // <-- Añade el componente aquí
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  exports: [InicioComponent] // <-- Y aquí también
})
export class InicioModule { }