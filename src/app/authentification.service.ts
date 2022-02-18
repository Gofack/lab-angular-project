import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthentificationService {

	private readonly mockedUser: User = { email: 'johndoe@mail.com', password: 'test123' };
	isAuthentifacated = false;

	constructor(
		private http: HttpClient
	) { }

	// getUsers(): Observable<User[]> {
	// 	return this.http.get<User[]>('api/users');
	// }

	authentificate(user: User): boolean {
		if (this.checkCredentials(user)) {
			this.isAuthentifacated = true;
			return true;
		}
		this.isAuthentifacated = false;
		return false;
	}

	checkCredentials(user: User): boolean {
		return this.checkEmail(user.email) && this.checkPassword(user.password);
	}

	checkEmail(email: string): boolean {
		return email === this.mockedUser.email;
	}

	checkPassword(password: string): boolean {
		return password === this.mockedUser.password;
	}
}
