import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private autenticado = false;

  ingresar(correo: string, contraseña: string): boolean {
      // Implementar lógica de autenticación
      this.autenticado = true;
      return this.autenticado;
  }

  salir() {
      this.autenticado = false;
  }

  estaAutenticado(): boolean {
      return this.autenticado;
  }
}