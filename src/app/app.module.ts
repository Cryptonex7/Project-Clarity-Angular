import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { runCssVarsPolyfill } from '@clr/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildTimesComponent } from './components/build-times/build-times.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { GlobalAlertComponent } from './layout/global-alert/global-alert.component';
import { BuildTimeLineChartComponent } from './components/build-time-line-chart/build-time-line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { SingleApiChartComponent } from './components/single-api-chart/single-api-chart.component';
import { ErrorChartComponent } from './components/error-chart/error-chart.component';
import { HomeComponent } from './pages/home/home.component';
import { CompareBuildsComponent } from './pages/compare-builds/compare-builds.component';
import { CompareChartComponent } from './pages/compare-builds/components/compare-chart/compare-chart.component';

runCssVarsPolyfill();
@NgModule({
  declarations: [
    AppComponent,
    BuildTimesComponent,
    SidebarComponent,
    NavbarComponent,
    GlobalAlertComponent,
    BuildTimeLineChartComponent,
    BarChartComponent,
    SingleApiChartComponent,
    ErrorChartComponent,
    HomeComponent,
    CompareBuildsComponent,
    CompareChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ClrIconModule,
    BrowserAnimationsModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
