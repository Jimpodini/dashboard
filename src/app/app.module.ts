import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import NavbarItemComponent from './core/layout/navbar-item/navbar-item.component';
import LayoutComponent from './core/layout/layout.component';
import LandingPageComponent from './pages/landing-page/landing-page.component';
import ContainerComponent from './core/container/container.component';
import LinearChartComponent from './core/charts/linear-chart/linear-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarItemComponent,
    LayoutComponent,
    LandingPageComponent,
    ContainerComponent,
    LinearChartComponent,
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
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
