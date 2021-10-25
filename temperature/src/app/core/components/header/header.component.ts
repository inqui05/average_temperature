import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav?: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    if(this.sidenav) this.sidenav.close();
  }
}
