// eslint-disable-next-line max-classes-per-file
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { Subscription } from 'rxjs';
import ThemeService, { Theme } from 'src/app/services/theme.service';
import { DashboardChart } from '../dashboard-chart.interface';

@Component({
  selector: 'dialog-content-example-dialog',
  template: '<h1>test</h1>',
})
export class DialogContentExampleDialog {}

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
})
export default class DoughnutChart
  implements OnInit, OnDestroy, DashboardChart
{
  canvas: HTMLCanvasElement | undefined;

  ctx: CanvasRenderingContext2D | undefined;

  myChart: Chart | undefined;

  latestData: number | undefined;

  config: ChartConfiguration<'doughnut', number[], string> & {
    options: { plugins: { legend: { labels: { color: string } } } };
  };

  s1: Subscription;

  constructor(private themeService: ThemeService, public dialog: MatDialog) {}

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('myDoughnutChart');

    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

    const data = {
      labels: ['Food', 'Housing', 'Transportation', 'Entertainment'],
      datasets: [
        {
          data: [65214, 59121, 80789, 81203],
          backgroundColor: ['#880061', '#c7006e', '#ef0078', '#ef4fa6'],
        },
      ],
    };

    this.config = {
      type: 'doughnut',
      data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: 'black',
            },
          },
        },
      },
    };
    this.myChart = new Chart(this.ctx, this.config);

    this.s1 = this.themeService.getThemeObservable().subscribe((theme) => {
      this.setThemeColor(theme);
    });
  }

  setThemeColor(theme: Theme): void {
    if (theme === 'dark') {
      this.config.data.datasets[0].backgroundColor = [
        '#e64d03',
        '#f57902',
        '#ff9500',
        '#ffb54c',
      ];
      this.config.options.plugins.legend.labels.color = 'white';
    } else {
      this.config.data.datasets[0].backgroundColor = [
        '#880061',
        '#c7006e',
        '#ef0078',
        '#ef4fa6',
      ];
      this.config.options.plugins.legend.labels.color = 'black';
    }
    this.myChart?.update();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    this.myChart?.destroy();
    this.s1.unsubscribe();
  }
}
