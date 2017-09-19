import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MdTooltipModule } from '@angular/material';
import { States } from '../States';
import { EarthquakeServiceComponent } from '../earthquake-service/earthquake-service.component';
import { EarthQuakeProperty } from '../EarthQuakeProperty';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})

export class SVGMapComponent implements OnInit {

  public stateQuakeInfo: EarthQuakeProperty[];
  public returnedInfo: EarthQuakeProperty[] = null;
  private svgImg: string;
  public svgPath: NodeListOf<SVGPathElement>;
  private req: any;

  @Input()
  svgImgDocument: Document;

  @Input()
  stateName: string = "";

  constructor(private service: EarthquakeServiceComponent) { }


  ngOnInit() {
  	this.svgImg = "assets/images/US_Map_Black.svg";
  	if(this.svgPath === null) {
  		this.svgPath = document.getElementsByTagName("path");
  	}
  }

  chooseState(event: Event): void {
	  this.stateName = event.srcElement.attributes[3].value;
	  if(this.returnedInfo !== null || this.returnedInfo) {
		console.log("here");
	  }
	  this.showSingleState(this.stateName);
  }

  showAllEarthquakePast1Hour(): void {
	
  	this.req = this.service.earthQuakeLastHour().subscribe(data => {
		this.returnedInfo = data;
		this.stateQuakeInfo = this.returnedInfo;
  		console.log(this.stateQuakeInfo);
  	});
  }

  private showSingleState(state: string): void {
	this.req = this.service.earthQuakeSingleState(state).subscribe(data => {
		this.stateQuakeInfo = data;
		console.log(data);
	});
  }
}

/*ngAfterViewInit() {
  	let objSvgId = document.querySelector("object");
  	this.svgImgDocument = objSvgId.contentDocument;
  	this.svgPath = this.svgImgDocument.getElementsByTagName("path");
  	while(true) {
	  	if(this.svgPath.length === 0) {
	  		console.log("loading");
	  		this.updateLoad();
	  	} else {
	  		console.log("haha");
	  		break;
	  	}
	}
  }*/
