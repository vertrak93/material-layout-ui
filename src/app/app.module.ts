import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarHeaderComponent } from './shared/components/toolbar-header/toolbar-header.component';
import { ToolbarFooterComponent } from './shared/components/toolbar-footer/toolbar-footer.component';
import { SidenavMenuComponent } from './shared/components/sidenav-menu/sidenav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SideNavigationMenuComponent } from './shared/components/side-navigation-menu/side-navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarHeaderComponent,
    ToolbarFooterComponent,
    SidenavMenuComponent,
    HomeComponent,
    SideNavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatTreeModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
