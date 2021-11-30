import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
    DAYS_PER_YEAR, DEFAULT_MONTH, DEFAULT_YEAR, MILLISECONDS_IN_DAY
} from 'src/app/shared/data';
import { AppDataService } from 'src/app/shared/services/app-data.service';
import { environment } from 'src/environments/environment';

import { IDayWeather, IRegion } from '../../shared/models/region.model';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  public weatherData: IDayWeather | null = null;

  public regionData: IRegion | null = null;

  public apiLoaded: Observable<boolean> = new Observable();

  public value = 0;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, public service: AppDataService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.regionData = this.service.regions[params.id];
      } else {
        this.regionData = this.service.regions[0];
      }
      this.service.currentRegion = this.regionData.name;
    });


    this.apiLoaded = this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsKey}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  public changeDay(): void {
    if (this.value && this.regionData) {
      this.weatherData = { ...this.regionData.temperature[this.value - 1], date: new Date(DEFAULT_YEAR, DEFAULT_MONTH, this.value) };
    } else {
      this.weatherData = null;
    }
  }

  public changeTimePeriod(): void {
    const start = this.range.value.start;
    const end = this.range.value.end;
    if (start && end) this.weatherData = this.calculateAvarageData(start, end);
  }

  private calculateAvarageData(start: Date, end: Date): IDayWeather {
    const startNewYear = new Date(start.getFullYear(), 0, 1);
    const endNewYear = new Date(end.getFullYear(), 0, 1);
    let startDaysSinceNY = (start.getTime() - startNewYear.getTime()) / MILLISECONDS_IN_DAY + 1;
    const endDaysSinceNY = (end.getTime() - endNewYear.getTime()) / MILLISECONDS_IN_DAY + 1;

    let period = 0;
    if (endDaysSinceNY > startDaysSinceNY) {
      period = endDaysSinceNY - startDaysSinceNY + 1;
    } else {
      period = DAYS_PER_YEAR - startDaysSinceNY + endDaysSinceNY + 1;
    }

    let max = -100;
    let min = 100;
    let avg = 0;

    for (let i = -1; i < (period - 1); i++) {
      if ((startDaysSinceNY + i) >= DAYS_PER_YEAR) startDaysSinceNY = - i;
      if (this.regionData) {
        if (this.regionData.temperature[startDaysSinceNY + i].max > max) max = this.regionData.temperature[startDaysSinceNY + i].max;
        if (this.regionData.temperature[startDaysSinceNY + i].min < min) min = this.regionData.temperature[startDaysSinceNY + i].min;
        avg += this.regionData.temperature[startDaysSinceNY + i].avg;
      }
    }
    avg = Math.floor((avg / period) * 10) / 10;

    return { avg, min, max, date: start, end };
  }
}
