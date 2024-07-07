import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Section {
  nombre: string;
  descripcion: string;
  updated: Date;
  categoria: string;
  precio: number;
  cantidad: number; 
  selected: boolean;
}

@Component({
  selector: 'app-lists',
  templateUrl: './inventario.component.html',
})
export class InventarioComponent {

  dataSource: Section[] = [];

  constructor(private http: HttpClient) {} 

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<any[]>('http://localhost:8000/api/core/get/list/Producto/')
      .subscribe(
        (data) => {
          this.dataSource = data;
        },
        (error) => {
          console.error('Error fetching products:', error);
          // Handle error if needed
        }
      );
  }

  
}
