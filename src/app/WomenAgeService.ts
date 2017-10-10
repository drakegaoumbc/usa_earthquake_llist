import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { WomenAgeProperties } from './WomenAgeProperties';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const womenagefeeds: string = "https://data.nola.gov/resource/2qnk-9ci7.json";

@Component({
  selector: 'app-womanage-service'
})

@Injectable()
export class WomenAgeServiceComponent implements OnInit {
  
  womanAgeProperties: WomenAgeProperties[];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  AllWomenAge(): Observable<WomenAgeProperties[]> {
	return this.http.get(womenagefeeds).map(item => {
		return item.json().filter(data => data.indicatorname.slice(-6) === "female").map(item => {
			let female = new WomenAgeProperties();
			female.year = item.year;
			female.indicatorvalue = +item.indicatorvalue;
			female.location = item.location.slice(-2);
			return female;
		});
	});
  }

  // filtering 1 state out
//   earthQuakeSingleState(state: string): Observable<EarthQuakeProperty[]> {
// 	return this.http.get(LastHourFeed).map(res => {
// 		return res.json().features.filter(item => item.properties.place.slice(-2) === state).map(item => {
// 			let info = new EarthQuakeProperty();
// 			info.title = item.properties.title;
// 			info.mag = +item.properties.mag;
// 			info.place = item.properties.place;
// 			let date = new Date(item.properties.time*1000);
// 			// Hours part from the timestamp
// 			let hours = date.getHours();
// 			// Minutes part from the timestamp
// 			let minutes = "0" + date.getMinutes();
// 			// Seconds part from the timestamp
// 			let seconds = "0" + date.getSeconds();
// 			// Will display time in 10:30:23 format
// 			let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// 			info.time = formattedTime;
// 			info.type = item.properties.type;
// 			info.felt = item.properties.felt;
// 			info.coordinates[0] = item.geometry.coordinates[0];
// 			info.coordinates[1] = item.geometry.coordinates[1];
// 			return info;
// 		})
// 	});
//   }
}
