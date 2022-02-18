import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(
		private authentificationService: AuthentificationService
	) { }

	ngOnInit(): void {
	}

	logOut() {
		this.authentificationService.logOut();
	}
}
