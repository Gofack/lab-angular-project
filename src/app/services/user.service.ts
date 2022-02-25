import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	getAllUsers(): Observable<User> {
		return this.http.get<User>('api/users');
	}

	getUser(id?: number | null): Observable<User> {
		const url = `'api/users/${id}`;
		return this.http.get<User>(url);
	}

	updateUser(user: User | undefined): Observable<any> {
		return this.http.put('api/users', user);
	}

	getFriends(user: User): Observable<any> {
		return this.http.get<User>('api/users');
	}

	searchUsers(term: string): Observable<User[]> {
		if (!term.trim()) {
			return this.http.get<User[]>('api/users');
		}
		return this.http.get<User[]>(`api/users/?name=${term}`);
	}
}
