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

  primaryColors: ThemeColors = {};

  primaryDarkColors: ThemeColors = {};

  constructor(private hljsLoader: HighlightLoader) {
    this.hljsLoader.setTheme(themeGithub);
    this.setThemeColors();
  }

  switchTheme(theme: Theme) {
    this.hljsLoader.setTheme(theme === 'light' ? themeGithub : themeObsidian);
    this.themeSubject.next(theme);
  }

  getThemeObservable(): Observable<Theme> {
    return this.themeObservable$.pipe(distinctUntilChanged(), shareReplay(1));
  }

  private setThemeColors(): void {
    this.primaryColors.primary50 = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--primary-50');
    this.primaryColors.primary300 = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--primary-300');
    this.primaryColors.primary500 = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--primary-500');
    this.primaryColors.primary700 = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--primary-700');
    this.primaryColors.primary900 = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--primary-900');
    this.primaryColors.cardBackground = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--card-background');

    this.primaryDarkColors.primary300 = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--dark-primary-300');
    this.primaryDarkColors.primary500 = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--dark-primary-500');
    this.primaryDarkColors.primary700 = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--dark-primary-700');
    this.primaryDarkColors.primary900 = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--dark-primary-900');
    this.primaryDarkColors.cardBackground = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--dark-card-background');
    this.primaryDarkColors.background = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--dark-background');
  }
}

export type Theme = 'dark' | 'light';

export type ThemeColors = {
  primary50?: string;
  primary300?: string;
  primary500?: string;
  primary700?: string;
  primary900?: string;
  cardBackground?: string;
  background?: string;
};
