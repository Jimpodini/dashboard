import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import ThemeService from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent {
  @HostBinding('class.darkMode') darkMode: boolean = false;

  constructor(
    public themeService: ThemeService,
    private overlayContainer: OverlayContainer
  ) {
    this.themeService.getThemeObservable().subscribe((mode) => {
      if (mode === 'dark') {
        this.darkMode = true;
        this.overlayContainer.getContainerElement().classList.add('darkMode');
      } else {
        this.darkMode = false;
        this.overlayContainer
          .getContainerElement()
          .classList.remove('darkMode');
      }
    });
  }
}
