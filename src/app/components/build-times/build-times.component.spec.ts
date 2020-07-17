import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildTimesComponent } from './build-times.component';

describe('BuildTimesComponent', () => {
  let component: BuildTimesComponent;
  let fixture: ComponentFixture<BuildTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
