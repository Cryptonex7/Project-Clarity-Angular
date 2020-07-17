import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildTimeLineChartComponent } from './build-time-line-chart.component';

describe('BuildTimeLineChartComponent', () => {
  let component: BuildTimeLineChartComponent;
  let fixture: ComponentFixture<BuildTimeLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildTimeLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildTimeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
