import { Directive, ElementRef, Input, HostListener } from '@angular/core';


@Directive({ 
	selector: '[hoverStateDirective]'
})
export class HoverStateDirective {
	@Input()
	stateName: string = "";
	
	constructor(private el: ElementRef) {
	}

	@HostListener('mouseenter')
	onMouseEnter() {
		//this.stateName = this.el.nativeElement.attributes[4].nodeValue;
	}
}
