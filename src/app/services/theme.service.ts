import { Injectable } from '@angular/core';
import { distinctUntilChanged, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ThemeService {
  private themeSubject = new Subject<Theme>();

  themeObservable$ = this.themeSubject.asObservable();

  switchTheme(theme: Theme) {
    this.themeSubject.next(theme);
  }

  getThemeObservable(): Observable<Theme> {
    return this.themeObservable$.pipe(distinctUntilChanged());
  }
}

type Theme = 'dark' | 'light';
