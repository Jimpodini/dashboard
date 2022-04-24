// eslint-disable-next-line max-classes-per-file
import { Component } from '@angular/core';
import Chart, { LineController } from 'chart.js/auto';

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

    const gradientBg = this.ctx.createLinearGradient(0, 0, 0, 400);
    gradientBg.addColorStop(0, '#f5b6da');
    gradientBg.addColorStop(1, 'white');

    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56],
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

// class Custom extends LineController {
//   override draw() {
//     // Call bubble controller method to draw all the points
//     // eslint-disable-next-line prefer-rest-params
//     super.draw(arguments);

//     // Now we can do some custom drawing for this dataset. Here we'll draw a red box around the first point in each dataset
//     const meta = this.getMeta();
//     const pt0 = meta.data[0];

//     const { x, y } = pt0.getProps(['x', 'y']);
//     const { radius } = pt0.options;

//     const { ctx } = this.chart;
//     ctx.save();
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = 1;
//     ctx.strokeRect(x - radius, y - radius, 2 * radius, 2 * radius);
//     ctx.restore();
//   }
// }
