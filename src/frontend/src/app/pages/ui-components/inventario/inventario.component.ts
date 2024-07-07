import { Component } from '@angular/core';

export interface Section {
  id: Number;
  name: string;
  description: string;
  updated: Date;
  class: string;
  cost: Number;
  cant: Number;
}

@Component({
  selector: 'app-lists',
  templateUrl: './inventario.component.html',
})
export class InventarioComponent {
  constructor() {}

  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      id: 0,
      name: 'Photos',
      description: 'hola',
      updated: new Date('1/1/16'),
      class: "comida",
      cost: 23,
      cant: 23,
    },
    {
      id: 0,
      name: 'Recipes',
      description: 'hola',
      updated: new Date('1/17/16'),
      class: "comida",
      cost: 23,
      cant: 23,
    },
    {
      id: 0,
      name: 'Work',
      description: 'hola',
      updated: new Date('1/28/16'),
      class: "comida",
      cost: 23,
      cant: 23,
    },
  ];
}
