import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	greetings = '';

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.appService.sayHello()
			.subscribe(
			result => {
				this.greetings = result;
			}
			);
	}
}
