import { Component, OnInit } from '@angular/core';
import { data } from '../../utils/constants';
import { ChartsService } from '../../services/charts.service';
@Component({
  selector: 'app-build-times',
  templateUrl: './build-times.component.html',
  styleUrls: ['./build-times.component.css'],
})
export class BuildTimesComponent implements OnInit {
  data: any = data;
  selected = [];
  public uniqueBuildNumbers = [];
  public uniqueApis = [];

  constructor(private chartsService: ChartsService) {}

  ngOnInit() {
    // this.buildToBuildAverageComparisonServiceService
    //   .getDataByurl()
    //   .subscribe((result) => this.formatData(result));
    this.chartsService.chartData.subscribe((res) =>
      console.log('Service: ', res)
    );
    this.formatData(this.data);
    this.selected = this.uniqueApis.map((apiName) => {
      return { data: this.data[apiName], label: apiName };
    });
    this.chartsService.chartData.next(this.selected);
  }

  formatData(data: any) {
    data.forEach((element) => {
      if (this.uniqueBuildNumbers.indexOf(element.buildNumber) == -1) {
        this.uniqueBuildNumbers.push(element.buildNumber);
      }
      if (this.uniqueApis.indexOf(element.apiName) == -1) {
        this.uniqueApis.push(element.apiName);
      }
      if (!this.data[element.apiName]) {
        this.data[element.apiName] = {};
      }
      this.data[element.apiName][element.buildNumber] = {
        avg: element.average,
        min: element.min,
        max: element.maximum,
        error: element.errorsPerenctage
      };
    });
    this.uniqueBuildNumbers.sort().reverse();
    console.table(this.data);
  }

  selectionChanged(e) {
    if (e.length > 0 && typeof e[0] === 'string') {
      this.selected = e;
      this.chartsService.chartData.next(
        e.map((apiName) => {
          return {
            data: this.data[apiName],
            label: apiName,
          };
        })
      );
    } else {
      this.chartsService.chartData.next(e);
    }
    console.log('Selection: ', this.selected, e);
  }
}
