import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { AppDataService } from 'src/app/shared/services/app-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav?: MatSidenav;

  public hideElements = 4;

  constructor(public service: AppDataService) {}

  close() {
    if(this.sidenav) {
      this.sidenav.close();
      this.hideElements = 4;
    }
  }

  open() {
    if (this.sidenav) {
      this.sidenav.open();
      this.hideElements = 5;
    }
  }
}
