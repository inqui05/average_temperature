import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { MapComponent } from './pages/map.component';
import { WeatherMonitorComponent } from './components/weather-monitor/weather-monitor.component';

@NgModule({
  declarations: [
    MapComponent,
    WeatherMonitorComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
  ]
})
export class MapsModule { }
