import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { InMemoryDataService } from '../in-memory-data.service';
import { AuthentificationService } from '../authentification.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	users: User[] = [];

	constructor(private AuthentificationService: AuthentificationService) {
	}

	ngOnInit(): void {
	}

	loginForm = new FormGroup({
		id: new FormControl(null),
		email: new FormControl(),
		password: new FormControl()
	});

	onSubmit(): void {
		this.AuthentificationService.authentificate(this.loginForm.value);
		// this.AuthentificationService.getUsers().subscribe(users => this.users = users);
	}
}
