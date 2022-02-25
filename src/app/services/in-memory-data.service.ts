import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game';
import { User } from '../interfaces/user';

@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
		const users: User[] = [
			{ id: 1, email: 'example@mail.com', password: '123', library: [], friends: [10], name: 'John', age: '10' },
			{ id: 2, email: 'example2@mail.com', password: '1234', library: [], friends: [1, 5], name: 'Kate', age: '15' },
			{ id: 3, email: 'example3@mail.com', password: '1235', library: [], friends: [3], name: 'Seb', age: '25' },
			{ id: 4, email: 'example4@mail.com', password: '1235', library: [], friends: [5], name: 'Dragon', age: '25' },
			{ id: 5, email: 'example5@mail.com', password: '1235', library: [], friends: [1], name: 'Cole', age: '30' },
			{ id: 6, email: 'example6@mail.com', password: '1235', library: [], friends: [8], name: 'Sofia', age: '35' },
			{ id: 7, email: 'example7@mail.com', password: '1235', library: [], friends: [2], name: 'Subzero', age: '40' },
			{ id: 8, email: 'example8@mail.com', password: '1235', library: [], friends: [9], name: 'Renat', age: '45' },
			{ id: 9, email: 'example9@mail.com', password: '1235', library: [], friends: [8], name: 'Jorik', age: '50' },
			{ id: 10, email: 'example10@mail.com', password: '1235', library: [], friends: [1], name: 'Mahmud', age: '55' },
		];
		const games: Game[] = [
			{ id: 1, genre: ['indie'], selected: false, name: 'Doom Ethernal', image: 'https://picsum.photos/id/237/200/300', price: '1200UAH', description: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 2, genre: ['indie', 'action'], selected: false, name: 'Doom Ethernal2', image: 'https://picsum.photos/id/238/200/300', price: '902UAH', description: '2Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 3, genre: ['action'], selected: false, name: 'Doom Ethernal3', image: 'https://picsum.photos/id/239/200/300', price: '303UAH', description: '3Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 4, genre: ['action', 'adventure'], selected: false, name: 'Doom Ethernal4', image: 'https://picsum.photos/id/240/200/300', price: '104UAH', description: '4Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 5, genre: ['adventure'], selected: false, name: 'Doom Ethernal5', image: 'https://picsum.photos/id/241/200/300', price: '25UAH', description: '5Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 6, genre: ['adventure', 'indie'], selected: false, name: 'Doom Ethernal6', image: 'https://picsum.photos/id/242/200/300', price: '2006UAH', description: '6Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' }
		];
		return { users, games };
	}

	constructor() { }
}
