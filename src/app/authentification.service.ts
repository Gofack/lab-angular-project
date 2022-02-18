import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { UserService } from './user.service';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthentificationService {

	// private readonly mockedUser: User = { "id": "1", "email": "johndoe@mail.com", "password": "test123" };
	users: User[] = [];
	isAuthentifacated = false;

	constructor(
		private http: HttpClient,
		// private userService: UserService,
		private router: Router
	) { }

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>('api/users');
	}

	authentificate(user: User, users: User[]): boolean {
		if (this.checkCredentials(user, users)) {
			this.isAuthentifacated = true;
			this.router.navigate(['profile']);
			return true;
		}
		this.isAuthentifacated = false;
		return false;
	}

	checkCredentials(user: User, users: User[]): boolean {
		return this.checkEmail(user.email, users) && this.checkPassword(user.password, users);
	}

	checkEmail(email: string, users: User[]): boolean {
		let match = users.find(user => user.email === email);
		if (match) {
			return true;
		}
		return false;
	}

	checkPassword(password: string, users: User[]): boolean {
		let match = users.find(user => user.password === password);
		if (match) {
			return true;
		}
		return false;
	}

	logOut() {
		this.isAuthentifacated = false;
		this.router.navigate(['']);
	}
}
