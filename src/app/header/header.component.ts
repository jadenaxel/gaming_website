import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss', "./header.cover.component.scss"],
})
export class HeaderComponent {
	width: any;

	constructor(menu: ElementRef, bag: ElementRef) {
		this.menu = menu;
		this.bag = bag;
	}

	@ViewChild('menu', { static: false }) menu: ElementRef;
	@ViewChild('bag', { static: false }) bag: ElementRef;

	ngAfterViewInit() {
		this.width = window.innerWidth;
	}

	@HostListener('window:resize')
	getViewPort() {
		this.width = window.innerWidth;
	}

	drawMenu() {
		const menuStyles: any = window.getComputedStyle(this.menu.nativeElement);
		const bagStyles: any = window.getComputedStyle(this.bag.nativeElement);

		menuStyles.getPropertyValue('display') === 'none'
			? (this.menu.nativeElement.style = 'display: block')
			: (this.menu.nativeElement.style = 'display: none');

		if (this.width >= 675) {
			bagStyles.getPropertyValue('display') == 'none'
				? (this.bag.nativeElement.style = 'display: block')
				: (this.bag.nativeElement.style = 'display: none');
		}
	}
}
