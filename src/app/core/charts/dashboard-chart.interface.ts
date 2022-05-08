import Chart, { ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';
import { Theme } from 'src/app/services/theme.service';

export interface DashboardChart {
  canvas: HTMLCanvasElement | undefined;

  ctx: CanvasRenderingContext2D | undefined;

  myChart: Chart | undefined;

  config: ChartConfiguration<keyof ChartTypeRegistry, number[], string>;

  setThemeColor(theme: Theme): void;
}
