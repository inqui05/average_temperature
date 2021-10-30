import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { AppDataService } from 'src/app/shared/services/app-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav?: MatSidenav;

  reason = '';

  constructor(public service: AppDataService) {}

  close(reason: string) {
    this.reason = reason;
    if(this.sidenav) this.sidenav.close();
  }
}
