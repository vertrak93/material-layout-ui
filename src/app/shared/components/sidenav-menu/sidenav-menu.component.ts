import { Component } from '@angular/core';
import { AppControlService } from 'src/app/shared/services/app-control.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {

  sidenavOpened: boolean = false;
  mode:MatDrawerMode = 'side';

  constructor( public appControlSrv: AppControlService, private screanSrv:ScreenService ){
    appControlSrv.getSideNavMenuOpened().subscribe( (e:boolean) => this.sidenavOpened = e);
    screanSrv.isHandset$.subscribe( (e:boolean) => this.updateSideNav(e) );
  }

  updateSideNav(isHandset:boolean){
    this.mode = isHandset ? 'over' : 'side';
    console.log(this.mode);
    this.appControlSrv.setSideNavMenuOpened(!isHandset);
  }

}
