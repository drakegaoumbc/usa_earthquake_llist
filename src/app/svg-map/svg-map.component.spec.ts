import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGMapComponent } from './svg-map.component';

describe('SVGMapComponent', () => {
  let component: SVGMapComponent;
  let fixture: ComponentFixture<SVGMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVGMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVGMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
