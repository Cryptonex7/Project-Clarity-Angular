import { Component } from '@angular/core';
import { ChartsService } from './services/charts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clarity-exp';
  constructor(public chartsService: ChartsService){}
  
}
