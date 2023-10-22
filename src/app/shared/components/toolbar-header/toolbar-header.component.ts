import { Component } from '@angular/core';
import { AppControlService } from '../../services/app-control.service';

@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.scss']
})
export class ToolbarHeaderComponent {

  constructor(private appControlSrv: AppControlService){}

  toggleSideNav(){
    this.appControlSrv.toggleSideNavMenu();
  }

}
