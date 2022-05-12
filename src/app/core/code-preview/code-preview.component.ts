import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HighlightLoader } from 'ngx-highlightjs';
import { Subscription } from 'rxjs';
import ThemeService from 'src/app/services/theme.service';

const themeGithub: string = '/assets/github.css';
const themeObsidian: string = '/assets/obsidian.css';

@Component({
  selector: 'app-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.css'],
})
export default class CodePreviewComponent {
  code: string;

  s1: Subscription;

  constructor(
    private hljsLoader: HighlightLoader,
    private themeService: ThemeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.code = this.data.code;
    this.hljsLoader.setTheme(
      this.themeService.currentTheme === 'light' ? themeGithub : themeObsidian
    );
  }
}
