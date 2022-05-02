import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import ThemeService from 'src/app/services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export default class LayoutComponent {
  @ViewChild(MatSlideToggle) toggle: MatSlideToggle | undefined;

  @HostBinding('class.darkMode') get darkMode() {
    this.themeService.switchTheme(this.toggle?.checked ? 'dark' : 'light');
    return this.toggle?.checked;
  }

  constructor(private themeService: ThemeService) {}
}
