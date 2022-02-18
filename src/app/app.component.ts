import { Component } from '@angular/core';
import { AuthentificationService } from './authentification.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'lab-angular-project';

	constructor(public authentificationservice: AuthentificationService) { }
}
