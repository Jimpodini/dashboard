import { Injectable } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';
import {
  BehaviorSubject,
  distinctUntilChanged,
  Observable,
  shareReplay,
} from 'rxjs';

const startingTheme: Theme = 'light';
const themeGithub: string = '/assets/github.css';
const themeObsidian: string = '/assets/obsidian.css';

@Injectable({
  providedIn: 'root',
})
export default class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>(startingTheme);

  themeObservable$ = this.themeSubject.asObservable();

  constructor(private hljsLoader: HighlightLoader) {
    this.hljsLoader.setTheme(themeGithub);
  }

  switchTheme(theme: Theme) {
    this.hljsLoader.setTheme(theme === 'light' ? themeGithub : themeObsidian);
    this.themeSubject.next(theme);
  }

  getThemeObservable(): Observable<Theme> {
    return this.themeObservable$.pipe(distinctUntilChanged(), shareReplay(1));
  }
}

export type Theme = 'dark' | 'light';
