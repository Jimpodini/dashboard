import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import BarChartComponent from './core/charts/bar-chart/bar-chart.component';
import LandingPageComponent from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'linearchart', component: LandingPageComponent },
  { path: 'barchart', component: BarChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
