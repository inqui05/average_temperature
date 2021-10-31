import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { googleMapsKey } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent {
  public apiLoaded: Observable<boolean>;

  public value = 0;

  public options: google.maps.MapOptions = {
    center: { lat: 53.675, lng: 30.397 },
    zoom: 7.8,
  };

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
}
