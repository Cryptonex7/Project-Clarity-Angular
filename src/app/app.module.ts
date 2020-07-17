import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildTimesComponent } from './components/build-times/build-times.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { GlobalAlertComponent } from './layout/global-alert/global-alert.component';
import { BuildTimeLineChartComponent } from './components/build-time-line-chart/build-time-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildTimesComponent,
    SidebarComponent,
    NavbarComponent,
    GlobalAlertComponent,
    BuildTimeLineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ClrIconModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
