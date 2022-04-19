import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export default class LayoutComponent {
  @ViewChild(MatSlideToggle) toggle: MatSlideToggle | undefined;

  @HostBinding('class.darkMode') get darkMode() {
    return this.toggle?.checked;
  }
}
