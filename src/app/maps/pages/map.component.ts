import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { eachDayOfInterval } from 'date-fns';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppDataService } from 'src/app/shared/services/app-data.service';
import { environment } from 'src/environments/environment';

import { IDayWeather, IRegion, IWeatherData } from '../../shared/models/region.model';

const MILLISECONDS_IN_SECOND = 1000;
const FORECAST_FOR_DAYS = 7;
const TIMES_OF_DAY = 4;
const TIME_IN_API_ANSWER = 13;


@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  public weatherData: IDayWeather | null = null;

  public regionInfo: IRegion | null = null;

  public regionData: IWeatherData | null = null;

  public apiLoaded: Observable<boolean> = new Observable();

  public value = 0;

  public minDate: Date;

  public maxDate: Date;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, public service: AppDataService) {
    const today = new Date();
    this.minDate = today;
    this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + FORECAST_FOR_DAYS);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.regionInfo = this.service.regions[params.id];
      } else {
        this.regionInfo = this.service.regions[0];
      }

      this.service.currentRegion = this.regionInfo.name;
      this.service.getWeatherData(this.regionInfo.mapSettings.lat, this.regionInfo.mapSettings.lng).subscribe((data) => this.regionData = data);
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
    if (this.regionData) {
      const todayWeather = this.regionData.daily[this.value];
      this.weatherData = {
        day: todayWeather.temp.day,
        night: todayWeather.temp.night,
        windSpeed: todayWeather.wind_speed,
        condition: todayWeather.weather[0].main,
        date: new Date(todayWeather.dt * MILLISECONDS_IN_SECOND),
      };
    }
  }

  public changeTimePeriod(): void {
    const start = this.range.value.start;
    const end = this.range.value.end;
    if (start && end) this.weatherData = this.calculateAvarageData(start, end);
  }

  private calculateAvarageData(start: Date, end: Date): IDayWeather {
    const period = eachDayOfInterval({ start, end });

    let max= -100;
    let min= +100;
    let avg = 0;

    period.forEach((item) => {
      const newTime = item.setHours(TIME_IN_API_ANSWER) / MILLISECONDS_IN_SECOND;
      if (this.regionData) {
        const day = this.regionData.daily.find((data) => data.dt === newTime);

        if(day) {
          if (day.temp.day > max) max = day.temp.day;
          if (day.temp.night < min) min = day.temp.night;
          avg = day.temp.day + day.temp.night + day.temp.morn + day.temp.eve;
        }
      }
    });
    avg = Math.floor((avg / (period.length * TIMES_OF_DAY)) * 10) / 10;

    return { avg, night: min, day: max, date: start, end };
  }
}
