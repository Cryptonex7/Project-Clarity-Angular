import { Component, OnInit } from '@angular/core';
import { data } from '../../utils/constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-compare-builds',
  templateUrl: './compare-builds.component.html',
  styleUrls: ['./compare-builds.component.sass'],
})
export class CompareBuildsComponent implements OnInit {
  data = data;
  apiName: FormGroup = new FormGroup({
    apiName: new FormControl('', [Validators.required]),
  });
  build1: FormGroup = new FormGroup({
    build1: new FormControl('', [Validators.required]),
  });
  build2: FormGroup = new FormGroup({
    build2: new FormControl('', [Validators.required]),
  });
  builds: string[] = [];
  apis: string[] = [];
  displayChart: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.data.forEach((obj) => {
      if (this.apis.indexOf(obj.apiName) === -1) this.apis.push(obj.apiName);
      if (this.builds.indexOf(obj.buildNumber) === -1)
        this.builds.push(obj.buildNumber);
    });
  }

  submit() {
    console.log('Form submit', this.apiName, this.build1, this.build2);
    this.displayChart = true;
  }
}
