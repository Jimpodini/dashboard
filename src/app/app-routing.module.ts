import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LandingPageComponent from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'linearchart', component: LandingPageComponent },
  { path: 'barchart', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
