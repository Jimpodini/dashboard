import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  Observable,
  shareReplay,
} from 'rxjs';

const startingTheme: Theme = 'light';

@Injectable({
  providedIn: 'root',
})
export default class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>(startingTheme);

  themeObservable$ = this.themeSubject.asObservable();

  currentTheme: Theme = startingTheme;

  switchTheme(theme: Theme) {
    this.currentTheme = theme;
    this.themeSubject.next(theme);
  }

  getThemeObservable(): Observable<Theme> {
    return this.themeObservable$.pipe(distinctUntilChanged(), shareReplay(1));
  }
}

export type Theme = 'dark' | 'light';
