import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAnchor} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import {MatOption, MatSelect} from "@angular/material/select";
import {CurrencyPipe} from "@angular/common";

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
        CurrencyPipe
    ],
  templateUrl: './register-prod.component.html',
  styleUrl: './register-prod.component.scss'
})
export class RegisterProdComponent {}

