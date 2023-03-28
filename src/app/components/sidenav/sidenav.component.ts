import { Component, OnInit, NgModule } from '@angular/core';
import { navBarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
@NgModule({ export: [] })
export class SidenavComponent {
  collapsed = true;
  navData = navBarData;
}
