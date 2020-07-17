import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
import { ChartDataModel } from './chart-data.model';

@Component({
  selector: 'app-build-time-line-chart',
  templateUrl: './build-time-line-chart.component.html',
  styleUrls: ['./build-time-line-chart.component.css'],
})
export class BuildTimeLineChartComponent implements OnInit {
  @Input() width: number | string = '100%';
  @Input() height: number | string = 400;
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public lineChartColors: Colors[] = [
    {
      backgroundColor: 'rgba(0, 122, 251, 0.2)',
      borderColor: 'rgba(0, 122, 251, 1)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  data: ChartDataModel;
  constructor(public chartsService: ChartsService) {}

  ngOnInit(): void {
    this.chartsService.chartData.subscribe((res: any[]) => {
      if (res.length === 0) {
        this.lineChartData = [
          {
            data: [],
            label: '',
            lineTension: 0,
          },
        ];
        this.lineChartLabels = [];
      } else {
        this.lineChartData = res.map((api) => {
          return {
            data: Object.keys(api.data).map(
              (buildno: string) => api.data[buildno].avg
            ),
            label: api.label,
            lineTension: 0,
          };
        });
        this.lineChartLabels = Object.keys(res[0].data);
      }
    });
  }
}
