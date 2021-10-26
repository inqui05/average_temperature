import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
  ],
})
export class MaterialModule { }
