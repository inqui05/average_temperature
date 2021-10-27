import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent {
  public value = 0;

  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
}
