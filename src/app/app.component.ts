import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authSrv:AuthService){}

  isLogged(){
    return this.authSrv.isLogged;
  }

  title = 'sales';

}
