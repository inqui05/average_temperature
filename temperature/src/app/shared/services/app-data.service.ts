import { Injectable } from '@angular/core';

import { temperature } from '../data';
import { IRegion } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  public regions: IRegion[] = temperature;
}
