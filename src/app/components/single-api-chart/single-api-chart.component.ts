import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
import { ChartDataModel } from '../../models/chart-data.model';

@Component({
  selector: 'app-single-api-chart',
  templateUrl: './single-api-chart.component.html',
  styleUrls: ['./single-api-chart.component.sass']
})
export class SingleApiChartComponent implements OnInit {

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
          (buildno) => this.buildData[buildno].avg
        ),
        label: "Avg Build Time",
        lineTension: 0,
      },
      {
        data: Object.keys(this.buildData).map(
          (buildno) => this.buildData[buildno].min
        ),
        label: "Min Build Time",
        lineTension: 0,
      },
      {
        data: Object.keys(this.buildData).map(
          (buildno) => this.buildData[buildno].max
        ),
        label: "Max Build Time",
        lineTension: 0,
      },
    ];
    this.lineChartLabels = Object.keys(this.buildData);

    // this.chartsService.chartData.subscribe((res: any[]) => {
    //   if (res.length === 0) {
    //     this.lineChartData = [
    //       {
    //         data: [],
    //         label: '',
    //         lineTension: 0,
    //       },
    //     ];
    //     this.lineChartLabels = [];
    //   } else {
    //     this.lineChartData = res.map((api) => {
    //       return {
    //         data: Object.keys(api.data).map(
    //           (buildno: string) => api.data[buildno].avg
    //         ),
    //         label: api.label,
    //         lineTension: 0,
    //       };
    //     });
    //     this.lineChartLabels = Object.keys(res[0].data);
    //   }
    // });
  }
}
