import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent {
  @ViewChild(MatSlideToggle) toggle: MatSlideToggle | undefined;

  @HostBinding('class.darkMode') get darkMode() {
    return this.toggle?.checked;
  }
}
