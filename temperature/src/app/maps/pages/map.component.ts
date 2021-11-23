import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DEFAULT_MONTH, DEFAULT_YEAR } from 'src/app/shared/data';
import { AppDataService } from 'src/app/shared/services/app-data.service';
import { googleMapsKey } from 'src/environments/environment';

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
      //console.log(this.regionData);
    });


    this.apiLoaded = this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  changeDay() {
    if (this.value && this.regionData) {
      this.weatherData = { ...this.regionData.temperature[this.value - 1], date: new Date(DEFAULT_YEAR, DEFAULT_MONTH, this.value) };
    } else {
      this.weatherData = null;
    }
  }

  changeTimePeriod() {
    console.log('fdfdf');
  }
}
