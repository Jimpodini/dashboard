// eslint-disable-next-line max-classes-per-file
import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { Subscription } from 'rxjs';
import ThemeService, { Theme } from 'src/app/services/theme.service';
import { DashboardChart } from '../dashboard-chart.interface';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export default class BarChartComponent
  implements OnInit, OnDestroy, DashboardChart
{
  canvas: HTMLCanvasElement | undefined;

  ctx: CanvasRenderingContext2D | undefined;

  myChart: Chart | undefined;

  latestData: number | undefined;

  config: ChartConfiguration<'bar', number[], string>;

  s1: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('myBarChart');

    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

    const data = [3, 5, 4, 8, 10];
    this.latestData = data[data.length - 1];

    this.config = {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Transactions',
            data,
            borderColor: '#ef0078',
            backgroundColor: '#ef0078',
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
      this.config.data.datasets[0].backgroundColor = '#ff9500';
      this.config.data.datasets[0].borderColor = '#ff9500';
    } else {
      this.config.data.datasets[0].backgroundColor = '#ef0078';
      this.config.data.datasets[0].borderColor = '#ef0078';
    }
    this.myChart?.update();
  }

  ngOnDestroy() {
    this.myChart?.destroy();
    this.s1.unsubscribe();
  }
}
