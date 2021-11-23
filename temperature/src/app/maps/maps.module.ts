import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import localeRu from '@angular/common/locales/ru';

import { MaterialModule } from '../shared/material.module';
import { MapComponent } from './pages/map.component';
import { WeatherMonitorComponent } from './components/weather-monitor/weather-monitor.component';

registerLocaleData(localeRu);

@NgModule({
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru',
  }],
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
