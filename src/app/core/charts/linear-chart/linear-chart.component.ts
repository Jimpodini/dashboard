// eslint-disable-next-line max-classes-per-file
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

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
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: 'My First Dataset',
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
  }
}
