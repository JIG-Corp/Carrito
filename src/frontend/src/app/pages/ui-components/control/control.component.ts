import { Component } from '@angular/core';

export interface Section {
  name: string;
  description: string;
  updated: Date;
  class: string;
  cost: Number;
}

@Component({
  selector: 'app-lists',
  templateUrl: './control.component.html',
})
export class ControlComponent {
  constructor() {}

  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      description: 'hola',
      updated: new Date('1/1/16'),
      class: "comida",
      cost: 23,
    },
    {
      name: 'Recipes',
      description: 'hola',
      updated: new Date('1/17/16'),
      class: "comida",
      cost: 23,
    },
    {
      name: 'Work',
      description: 'hola',
      updated: new Date('1/28/16'),
      class: "comida",
      cost: 23,
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      description: 'hola',
      updated: new Date('2/20/16'),
      class: "comida",
      cost: 23,
    },
    {
      name: 'Kitchen Remodel',
      description: 'hola',
      updated: new Date('1/18/16'),
      class: "comida",
      cost: 23,
    },
  ];
}
