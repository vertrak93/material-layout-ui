import { Component } from '@angular/core';
import { sitemap } from 'src/app/app-navigation'

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent {

  constructor(){}

  get siteMapItems(){
    return sitemap;
  }

}
