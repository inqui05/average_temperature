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

  constructor(public service: AppDataService) {}

  close() {
    if(this.sidenav) this.sidenav.close();
  }
}
