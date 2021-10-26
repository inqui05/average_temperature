import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { MapComponent } from './pages/map.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class MapsModule { }
