import { Component, OnInit, Input } from '@angular/core';
import { EarthquakeServiceComponent } from '../earthquake-service/earthquake-service.component';
import { EarthQuakeProperty } from '../EarthQuakeProperty';
import { FormControl } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-home-page-table',
  templateUrl: './home-page-table.component.html',
  styleUrls: ['./home-page-table.component.css']
})
export class HomePageTableComponent implements OnInit {

  private searchField: FormControl;


  @Input()
  earthQuakeProperty: EarthQuakeProperty;

  constructor(private service: EarthquakeServiceComponent) { }

  ngOnInit() {
  }

  changeMag(mag: any): void {
  	console.log(mag);
  }


}
