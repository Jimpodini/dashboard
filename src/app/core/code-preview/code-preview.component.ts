import { Component } from '@angular/core';
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
  code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Test 1!";
    document.getElementById("demo2").innerHTML = "Test 2!";
  }`;

  s1: Subscription;

  constructor(
    private hljsLoader: HighlightLoader,
    private themeService: ThemeService
  ) {
    this.hljsLoader.setTheme(
      this.themeService.currentTheme === 'light' ? themeGithub : themeObsidian
    );
  }
}
