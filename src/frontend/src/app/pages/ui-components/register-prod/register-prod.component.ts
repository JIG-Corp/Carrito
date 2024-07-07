import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAnchor} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import {MatOption, MatSelect} from "@angular/material/select";
import {CurrencyPipe} from "@angular/common";
import Swal from "sweetalert2";
import {MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTable, MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-register-prod',
  standalone: true,
    imports: [
        FormsModule,
        MatAnchor,
        MatCard,
        MatCheckbox,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        RouterLink,
        MatSelect,
        MatOption,
        CurrencyPipe,
        MatTable,
        MatTableModule,
        MatHeaderCell,
        MatCell,
        MatHeaderRow,
        MatRow
    ],
  templateUrl: './register-prod.component.html',
  styleUrl: './register-prod.component.scss'
})
export class RegisterProdComponent {
    displayedColumns = [
        "id",
        "nombre",
        "descripcion",
        "categoria",
        "precio",
        "edit",
    ];
    dataSource: any[];

    constructor() {
        this.dataSource = [];
        this.getProducts();
    }

    async getProducts() {
        const result = await fetch(
      "http://localhost:8000/api/core/get/list/Producto/"
        );
        this.dataSource = (await result.json()) as any[];
    }

    async addProduct() {
    type AddProductForm = {
      nombre: string;
      descripcion: string;
      categoria: string;
      precio: number;
    };

    let nombreInput: HTMLInputElement;
    let descripcionInput: HTMLInputElement;
    let categoriaInput: HTMLInputElement;
    let precioInput: HTMLInputElement;

    Swal.fire<AddProductForm>({
      title: "Agregar producto",
      html: `
    <mat-label class="mat-subtitle-1 f-w-600 d-block">
        Nombre del Producto
    </mat-label>
    <input type="text" id="nombre" class="swal2-input">
    <mat-label class="mat-subtitle-1 f-w-600 d-block">
        Descripción
    </mat-label>
    <input type="text" id="descripcion" class="swal2-input">
    <mat-label class="mat-subtitle-1 f-w-600 d-block">
        Categoría
    </mat-label>
    <input type="text" id="categoria" class="swal2-input">
    <mat-label class="mat-subtitle-1 f-w-600 d-block">
        Precio (CLP$)
    </mat-label>
    <input type="text" id="precio" class="swal2-input">
    `,
      confirmButtonText: "Guardar",
      focusConfirm: false,
      didOpen: () => {
        const popup = Swal.getPopup()!;
        nombreInput = popup.querySelector("#nombre") as HTMLInputElement;
        descripcionInput = popup.querySelector("#descripcion") as HTMLInputElement;
        categoriaInput = popup.querySelector("#categoria") as HTMLInputElement;
        precioInput = popup.querySelector("#precio") as HTMLInputElement;

        nombreInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
        descripcionInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
        categoriaInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
        precioInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
      },
      preConfirm: () => {
        const nombre = nombreInput.value;
        const descripcion = descripcionInput.value;
        const categoria = categoriaInput.value;
        const precio = precioInput.value;
        if (!nombre || !descripcion || !categoria || !precio)  {
          Swal.showValidationMessage(`Por favor rellene los campos`);
        }
        else if (isNaN(Number(precio))) {
            Swal.showValidationMessage('Precio tiene que ser un número')
        }
        return { nombre, descripcion, categoria, precio };
      },
    }).then(async (result) => {
      if(result.value){

        const response = await fetch(
          `http://localhost:8000/api/core/post/Producto/`,
          {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nombre: nombreInput.value,
              descripcion: descripcionInput.value,
              categoria: categoriaInput.value,
              precio : precioInput.value
            })
          }
        );

        if (response.status >= 200 && response.status <= 205) {
          Swal.fire({
            title: "Creado",
            text: `${nombreInput.value} se a creado de los registros`,
            icon: "success",
          }).then((ok) => {
            if (ok.value) {
              this.getProducts();
            }
          });
        } else {
          Swal.fire({
            title: "Error",
            text: `No se pudo crear a ${nombreInput.value}`,
            icon: "error",
          });
        }
      }
    });
  }
}

