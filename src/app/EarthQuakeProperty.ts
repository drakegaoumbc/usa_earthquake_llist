import { OnInit } from '@angular/core';

export class EarthQuakeProperty {
	mag: number = 0.0;
	place: string;
	time: string;
	type: string;
	title: string;
	felt: string;
	coordinates: number[]; // = [];
	constructor(){this.coordinates = [];}
}