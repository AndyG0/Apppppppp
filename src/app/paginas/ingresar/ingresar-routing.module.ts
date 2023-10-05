import { NgModule } from '@angular/core';
import { IngresarComponent } from './ingresar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresarRoutingModule { }
