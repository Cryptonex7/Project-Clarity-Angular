import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBuildsComponent } from './compare-builds.component';

describe('CompareBuildsComponent', () => {
  let component: CompareBuildsComponent;
  let fixture: ComponentFixture<CompareBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
