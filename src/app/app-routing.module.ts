import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import BarChartComponent from './core/charts/bar-chart/bar-chart.component';
import DoughnutChart from './core/charts/doughnut-chart/doughnut-chart.component';
import LandingPageComponent from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/linearchart', pathMatch: 'full' },
  { path: 'linearchart', component: LandingPageComponent },
  { path: 'barchart', component: BarChartComponent },
  { path: 'doughnutchart', component: DoughnutChart },
  { path: '**', redirectTo: '/linearchart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
