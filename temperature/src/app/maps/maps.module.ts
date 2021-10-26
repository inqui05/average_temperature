import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { MapComponent } from './pages/map.component';

@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MapComponent,
  ],
})
export class MapsModule { }
