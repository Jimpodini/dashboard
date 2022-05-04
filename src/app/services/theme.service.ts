import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('light');

  themeObservable$ = this.themeSubject.asObservable();

  switchTheme(theme: Theme) {
    this.themeSubject.next(theme);
  }

  getThemeObservable(): Observable<Theme> {
    return this.themeObservable$.pipe(distinctUntilChanged());
  }
}

export type Theme = 'dark' | 'light';
