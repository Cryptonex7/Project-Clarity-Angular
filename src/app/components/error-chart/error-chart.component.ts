import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
import { ChartDataModel } from '../../models/chart-data.model';

@Component({
  selector: 'app-error-chart',
  templateUrl: './error-chart.component.html',
  styleUrls: ['./error-chart.component.sass']
})
export class ErrorChartComponent implements OnInit {

  @Input() width: number = null;
  @Input() height: number | string = 400;
  @Input() buildData = [];
  @Input() apiName = '';
  @Input() lineChartData: ChartDataSets[] = [];
  @Input() lineChartLabels: Label[] = [];
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
      xAxes : [
        {
          ticks : {
            display: false
          }
        }
      ]
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
    console.log(this.buildData)
    this.lineChartData = [
      {
        data: Object.keys(this.buildData).map(
          (buildno) => parseFloat(this.buildData[buildno].error)
        ),
        label: "Percentage Error",
        lineTension: 0,
      },
    ];
    this.lineChartLabels = Object.keys(this.buildData);
  }

}
