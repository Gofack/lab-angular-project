import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
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
		this.getUsers();
	}

	loginForm = new FormGroup({
		id: new FormControl(null),
		email: new FormControl(),
		password: new FormControl()
	});

	getUsers(): void {
		this.AuthentificationService.getUsers().subscribe(users => this.users = users);
	}

	onSubmit(): void {
		this.AuthentificationService.authentificate(this.loginForm.value, this.users);
	}
}
