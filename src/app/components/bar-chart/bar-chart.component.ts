import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ChartDataModel } from '../../models/chart-data.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() width: number = 500;
  @Input() height: number | string = 400;
  public barChartData: ChartDataSets[] = [];
  public barChartLabels: Label[] = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "right"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };
  public barChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0, 122, 251, 0.2)',
      borderColor: 'rgba(0, 122, 251, 1)',
    },
  ];
  public barChartLegend = true;
  public barChartType = 'bar'; // bar
  public barChartPlugins = [];

  data: ChartDataModel;
  constructor(public chartsService: ChartsService) {}

  ngOnInit(): void {
    this.chartsService.chartData.subscribe((res: any[]) => {
      if (res.length === 0) {
        this.barChartData = [
          {
            data: [],
            label: '',
            lineTension: 0
          },
        ];
        this.barChartLabels = [];
      } else {
        this.barChartData = res.map((api) => {
          return {
            data: Object.keys(api.data).map(
              (buildno: string) => api.data[buildno].avg
            ),
            label: api.label,
            barTension: 0,
          };
        });
        this.barChartLabels = Object.keys(res[0].data);
      }
    });
  }
}
