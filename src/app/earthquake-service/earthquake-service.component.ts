import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { EarthQuakeProperty } from '../EarthQuakeProperty';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const LastHourFeed: string = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";

@Component({
  selector: 'app-earthquake-service',
  templateUrl: './earthquake-service.component.html',
  styleUrls: ['./earthquake-service.component.css']
})

@Injectable()
export class EarthquakeServiceComponent implements OnInit {

  earthQuakeData: EarthQuakeProperty[];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  earthQuakeLastHour(): Observable<EarthQuakeProperty[]> {
  	return this.http.get(LastHourFeed).map(res => {
  		return res.json().features.map(item => {
  			let info = new EarthQuakeProperty();
  			info.title = item.properties.title;
  			info.mag = item.properties.mag;
  			info.place = item.properties.place;
  			let date = new Date(item.properties.time*1000);
			// Hours part from the timestamp
			let hours = date.getHours();
			// Minutes part from the timestamp
			let minutes = "0" + date.getMinutes();
			// Seconds part from the timestamp
			let seconds = "0" + date.getSeconds();
			// Will display time in 10:30:23 format
			let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  			info.time = formattedTime;
  			info.type = item.properties.type;
  			info.felt = item.properties.felt;
  			info.coordinates[0] = item.geometry.coordinates[0];
  			info.coordinates[1] = item.geometry.coordinates[1];
  			return info;
  		});
  	});
  }

  // filtering 1 state out
  earthQuakeSingleState(state: string): Observable<EarthQuakeProperty[]> {
	return this.http.get(LastHourFeed).map(res => {
		return res.json().features.filter(item => item.properties.place.slice(-2) === state).map(item => {
			let info = new EarthQuakeProperty();
			info.title = item.properties.title;
			info.mag = item.properties.mag;
			info.place = item.properties.place;
			let date = new Date(item.properties.time*1000);
			// Hours part from the timestamp
			let hours = date.getHours();
			// Minutes part from the timestamp
			let minutes = "0" + date.getMinutes();
			// Seconds part from the timestamp
			let seconds = "0" + date.getSeconds();
			// Will display time in 10:30:23 format
			let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

			info.time = formattedTime;
			info.type = item.properties.type;
			info.felt = item.properties.felt;
			info.coordinates[0] = item.geometry.coordinates[0];
			info.coordinates[1] = item.geometry.coordinates[1];
			return info;
		})
	});
  }
}
