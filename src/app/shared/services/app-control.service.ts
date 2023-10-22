import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppControlService {

  sideNavMenuOpened = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggleSideNavMenu(){
    this.sideNavMenuOpened.next(!this.sideNavMenuOpened.value);
  }

  getSideNavMenuOpened(){
    return this.sideNavMenuOpened.asObservable();
  }
}
