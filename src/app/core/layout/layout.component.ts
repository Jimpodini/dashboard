import { Component } from '@angular/core';
import ThemeService from 'src/app/services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export default class LayoutComponent {
  constructor(private themeService: ThemeService) {}

  toggleDarkTheme(checked: boolean) {
    this.themeService.switchTheme(checked ? 'dark' : 'light');
  }
}
