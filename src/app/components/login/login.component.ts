import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { AuthentificationService } from '../../services/authentification.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	users: User[] = [];
	errorMessage: string = '';
	private readonly email = 'example@mail.com';
	private readonly pass = '123';

	constructor(private AuthentificationService: AuthentificationService) {
	}

	loginForm = new FormGroup({
		id: new FormControl(null),
		email: new FormControl('', [Validators.email]),
		password: new FormControl('', [Validators.minLength(3)])
	});

	ngOnInit(): void {
		this.getUsers();
		this.loginForm.controls['email'].setValue(this.email);
		this.loginForm.controls['password'].setValue(this.pass);
	}

	getUsers(): void {
		this.AuthentificationService.getUsers().subscribe(users => this.users = users);
	}

	onSubmit(): void {
		if (this.loginForm.valid) {
			this.AuthentificationService.authentificate(this.loginForm.value, this.users);
			sessionStorage.setItem('userEmail', this.loginForm.value.email);
		} else {
			this.errorMessage = 'Please enter correct email and password';
		}
		this.loginForm.reset();
	}
}
