import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, Output, ViewChild } from '@angular/core';
import { SVGMapComponent } from '../svg-map/svg-map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, AfterViewChecked {
  svgImgPaths: NodeListOf<SVGPathElement>;

  @Input()
  stateName: string = "";
  constructor() { }

  // Query for a VIEW child of type `SVGMapComponent`
  @ViewChild(SVGMapComponent) viewChild: SVGMapComponent;

  ngAfterViewInit() {
  	console.log("home is inited");
  	this.updateStateName();
  }

  ngAfterViewChecked() {
  	if(this.stateName === this.viewChild.stateName) {
  		console.log(this.stateName + " " + this.viewChild.stateName);
  		console.log("nothing changes");
  	} else {
  		this.stateName = this.viewChild.stateName;
  		this.updateStateName();
  		console.log("chnage " + this.stateName + " " + this.viewChild.stateName);
  	}
  }

  private updateStateName(): void {
  	let tempName = this.stateName;
  	if(tempName !== this.viewChild.stateName) {
  		let self = this;
  		setTimeout(()=> {
  			self.stateName = self.viewChild.stateName;
  			console.log(tempName);
  		}, 500);
  	}
  }

}
