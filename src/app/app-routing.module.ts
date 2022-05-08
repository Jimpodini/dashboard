import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import BarChartComponent from './core/charts/bar-chart/bar-chart.component';
import DoughnutChart from './core/charts/doughnut-chart/doughnut-chart.component';
import LandingPageComponent from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'linearchart', component: LandingPageComponent },
  { path: 'barchart', component: BarChartComponent },
  { path: 'doughnutchart', component: DoughnutChart },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
