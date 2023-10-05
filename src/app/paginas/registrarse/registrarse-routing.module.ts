import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NativeScriptCommonModule } from '@nativescript/angular';


const routes: Routes = [];

@NgModule({
  imports: [NativeScriptCommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarseRoutingModule { }
