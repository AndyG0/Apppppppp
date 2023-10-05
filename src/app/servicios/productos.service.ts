import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos = [
      // Ejemplo de productos
      { id: 1, nombre: "Producto A", precio: 100 },
      { id: 2, nombre: "Producto B", precio: 200 }
  ];

  obtenerProductos(): any[] {
      return this.productos;
  }

  obtenerProducto(id: number): any {
      return this.productos.find(producto => producto.id === id);
  }
}

