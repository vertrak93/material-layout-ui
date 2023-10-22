import { Component } from '@angular/core';
import { AppControlService } from 'src/app/shared/services/app-control.service'

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {

  sidenavOpened: boolean = false;

  constructor( appControlSrv: AppControlService ){
    appControlSrv.getSideNavMenuOpened().subscribe( (e:boolean) => this.sidenavOpened = e);
  }

}
