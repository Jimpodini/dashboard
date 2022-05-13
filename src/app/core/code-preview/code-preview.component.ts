import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.css'],
})
export default class CodePreviewComponent {
  code: string;

  s1: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.code = this.data.code;
  }
}
