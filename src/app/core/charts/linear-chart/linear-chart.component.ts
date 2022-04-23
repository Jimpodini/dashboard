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

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('myChart');

    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {},
    });
  }
}
