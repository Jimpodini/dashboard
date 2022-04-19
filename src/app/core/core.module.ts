import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import SidenavComponent from './components/sidenav/sidenav.component';
import NavbarItemComponent from './components/sidenav/navbar-item/navbar-item.component';

@NgModule({
  declarations: [SidenavComponent, NavbarItemComponent],
  imports: [CommonModule, MatSidenavModule, MatIconModule],
  exports: [SidenavComponent],
})
export default class CoreModule {}
