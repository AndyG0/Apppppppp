import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { NativeScriptCommonModule } from '@nativescript/angular';



const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "ingresar", loadChildren: () => import('./paginas/ingresar/ingresar.module').then(m => m.IngresarModule) },
  { path: "registrarse", loadChildren: () => import('./paginas/registrarse/registrarse.module').then(m => m.RegistrarseModule) },
  { path: "inicio", loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioModule) },
  { path: "carrito", loadChildren: () => import('./paginas/carrito/carrito.module').then(m => m.CarritoModule) }
];

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})

export class AppRoutingModule {}
