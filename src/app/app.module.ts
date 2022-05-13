import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {
  HighlightModule,
  HighlightOptions,
  HIGHLIGHT_OPTIONS,
} from 'ngx-highlightjs';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import NavbarItemComponent from './core/layout/navbar-item/navbar-item.component';
import LayoutComponent from './core/layout/layout.component';
import LandingPageComponent from './pages/landing-page/landing-page.component';
import ThemeService from './services/theme.service';
import LinearChartComponent from './core/charts/linear-chart/linear-chart.component';
import BarChartComponent from './core/charts/bar-chart/bar-chart.component';
import DoughnutChart from './core/charts/doughnut-chart/doughnut-chart.component';
import CodePreviewComponent from './core/code-preview/code-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarItemComponent,
    LayoutComponent,
    LandingPageComponent,
    LinearChartComponent,
    BarChartComponent,
    DoughnutChart,
    CodePreviewComponent,
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
    MatDialogModule,
    HighlightModule,
  ],
  providers: [
    ThemeService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        themePath: 'assets/github.css',
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
