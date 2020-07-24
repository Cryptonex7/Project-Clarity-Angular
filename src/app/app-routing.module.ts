import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompareBuildsComponent } from './pages/compare-builds/compare-builds.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'compare', component: CompareBuildsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
