import { Component } from '@angular/core';
import { AppControlService } from '../../services/app-control.service';
import { AuthService, IUser } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.scss']
})
export class ToolbarHeaderComponent {

  username:string = '';

  constructor(private appControlSrv: AppControlService, private authSrv: AuthService){
    this.username = authSrv.getUser.username;
  }

  toggleSideNav(){
    this.appControlSrv.toggleSideNavMenu();
  }

  logOut(){
    this.authSrv.logOut();
  }

}
