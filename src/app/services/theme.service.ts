import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable, shareReplay } from 'rxjs';

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
    return this.themeObservable$.pipe(distinctUntilChanged(), shareReplay(1));
  }
}

export type Theme = 'dark' | 'light';
