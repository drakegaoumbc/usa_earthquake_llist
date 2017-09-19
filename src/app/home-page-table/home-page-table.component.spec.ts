import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTableComponent } from './home-page-table.component';

describe('HomePageTableComponent', () => {
  let component: HomePageTableComponent;
  let fixture: ComponentFixture<HomePageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
