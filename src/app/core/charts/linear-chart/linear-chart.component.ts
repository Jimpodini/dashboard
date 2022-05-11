// eslint-disable-next-line max-classes-per-file
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { Subscription } from 'rxjs';
import ThemeService, { Theme } from 'src/app/services/theme.service';
import CodePreviewComponent from '../../code-preview/code-preview.component';
import { DashboardChart } from '../dashboard-chart.interface';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.css'],
})
export default class LinearChartComponent
  implements OnInit, OnDestroy, DashboardChart
{
  canvas: HTMLCanvasElement | undefined;

  ctx: CanvasRenderingContext2D | undefined;

  myChart: Chart | undefined;

  latestData: number | undefined;

  config: ChartConfiguration<'line', number[], string>;

  s1: Subscription;

  constructor(private themeService: ThemeService, public dialog: MatDialog) {}

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('myChart');

    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

    const data = [65214, 59121, 80789, 81203, 56781];
    this.latestData = data[data.length - 1];

    this.config = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Bank balance',
            data,
            borderColor: '#ef0078',
            tension: 0.4,
            pointRadius: 2,
            fill: true,
            pointBackgroundColor: '#ef0078',
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
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
      const gradientBgDark = this.ctx?.createLinearGradient(0, 0, 0, 200);
      gradientBgDark?.addColorStop(0, '#303030');
      gradientBgDark?.addColorStop(1, '#424242');
      this.config.data.datasets[0].backgroundColor = gradientBgDark;
      this.config.data.datasets[0].borderColor = '#ff9500';
      this.config.data.datasets[0].pointBackgroundColor = '#ff9500';
    } else {
      const gradientBg = this.ctx?.createLinearGradient(0, 0, 0, 200);
      gradientBg?.addColorStop(0, '#fbe2f0');
      gradientBg?.addColorStop(1, '#FFFFFF');
      this.config.data.datasets[0].backgroundColor = gradientBg;
      this.config.data.datasets[0].borderColor = '#ef0078';
      this.config.data.datasets[0].pointBackgroundColor = '#ef0078';
    }
    this.myChart?.update();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CodePreviewComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    this.myChart?.destroy();
    this.s1.unsubscribe();
  }
}
