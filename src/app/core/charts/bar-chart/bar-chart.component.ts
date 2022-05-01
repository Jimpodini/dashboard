// eslint-disable-next-line max-classes-per-file
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export default class BarChartComponent {
  canvas: HTMLCanvasElement | undefined;

  ctx: CanvasRenderingContext2D | undefined;

  myChart: Chart | undefined;

  latestData: number | undefined;

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('myBarChart');

    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

    const data = [3, 5, 4, 8, 10];
    this.latestData = data[data.length - 1];

    this.myChart = new Chart(this.ctx, {
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
    });
  }

  ngOnDestroy() {
    this.myChart?.destroy();
  }
}
