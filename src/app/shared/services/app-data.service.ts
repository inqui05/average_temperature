import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { temperature } from '../data';
import { IRegion, IWeatherData } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  public regions: IRegion[] = temperature;

  public currentRegion = 'Минск';

  constructor(private http: HttpClient) { }

  public getWeatherData(lat: number, lng: number): Observable<IWeatherData> {
    return this.http.get<IWeatherData>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&units=metric&appid=${environment.openWeatherMapKey}`);
  }
}
