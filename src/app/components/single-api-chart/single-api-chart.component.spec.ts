import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleApiChartComponent } from './single-api-chart.component';

describe('SingleApiChartComponent', () => {
  let component: SingleApiChartComponent;
  let fixture: ComponentFixture<SingleApiChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleApiChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleApiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
