import { Component, Input } from '@angular/core';

import { IDayWeather } from 'src/app/shared/models/region.model';

@Component({
  selector: 'app-weather-monitor',
  templateUrl: './weather-monitor.component.html',
  styleUrls: ['./weather-monitor.component.sass']
})
export class WeatherMonitorComponent {
  @Input() data: IDayWeather | null = null;
}
