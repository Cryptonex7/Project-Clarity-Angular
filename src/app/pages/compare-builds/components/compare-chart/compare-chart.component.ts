import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ChartDataModel } from 'src/app/models/chart-data.model';
import { data } from 'src/app/utils/constants';

@Component({
  selector: 'app-compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.sass'],
})
export class CompareChartComponent implements OnInit {
  @Input() width: number = 500;
  @Input() height: number | string = 400;
  @Input() apiName: string;
  @Input() build1: string;
  @Input() build2: string;
  barChartData: ChartDataSets[] = [];
  barChartLabels: Label[] = [];
  public barChartOptions: ChartOptions = {
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
  public barChartType = 'bar';
  public barChartPlugins = [];

  data = data;
  constructor(public chartsService: ChartsService) {}

  ngOnInit(): void {
    const value1 = this.data.findIndex(
      (obj) => obj.apiName === this.apiName && obj.buildNumber === this.build1
    );
    const value2 = this.data.findIndex(
      (obj) => obj.apiName === this.apiName && obj.buildNumber === this.build2
    );
    console.log(this.build2, this.apiName)
    this.barChartData = [
      {
        data: [data[value1].min, data[value2].min],
        label: 'Min Build Time',
      },
      {
        data: [data[value1].maximum, data[value2].maximum],
        label: 'Max Build Time',
      },
      {
        data: [data[value1].average, data[value2].average],
        label: 'Avg Build Time',
      },
    ];
    this.barChartLabels = [this.build1, this.build2];
  }
}
