import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeServiceComponent } from './earthquake-service.component';

describe('EarthquakeServiceComponent', () => {
  let component: EarthquakeServiceComponent;
  let fixture: ComponentFixture<EarthquakeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
