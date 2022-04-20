import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import NavbarItemComponent from './core/layout/navbar-item/navbar-item.component';
import LayoutComponent from './core/layout/layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarItemComponent,
    LayoutComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
