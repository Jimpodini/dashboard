import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ThemeService {
  private themeSubject = new Subject<Theme>();

  themeObservable = this.themeSubject.asObservable();

  switchTheme(theme: Theme) {
    this.themeSubject.next(theme);
  }
}

type Theme = 'dark' | 'light';
