// eslint-disable-next-line max-classes-per-file
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import ThemeService from 'src/app/services/theme.service';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.css'],
})
export default class LinearChartComponent {
  canvas: HTMLCanvasElement | undefined;

  ctx: CanvasRenderingContext2D | undefined;

  myChart: Chart | undefined;

  latestData: number | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('myChart');

    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

    const gradientBg = this.ctx.createLinearGradient(0, 0, 0, 200);
    gradientBg.addColorStop(0, '#fbe2f0');
    gradientBg.addColorStop(1, '#FFFFFF');

    const data = [65214, 59121, 80789, 81203, 56781];
    this.latestData = data[data.length - 1];

    this.myChart = new Chart(this.ctx, {
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
            backgroundColor: gradientBg,
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
    });

    this.themeService.themeObservable.subscribe(console.log);
  }

  ngOnDestroy() {
    this.myChart?.destroy();
  }
}
