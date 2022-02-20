import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
		const users = [
			{ email: 'example@mail.com', password: '123' },
			{ email: 'example2@mail.com', password: '1234' },
			{ email: 'example3@mail.com', password: '1235' },
		];
		const games = [
			{ id: 1, selected: false, name: 'Doom Ethernal', image: 'https://picsum.photos/id/237/200/300', price: '200UAH', description: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 2, selected: false, name: 'Doom Ethernal2', image: 'https://picsum.photos/id/238/200/300', price: '202UAH', description: '2Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 3, selected: false, name: 'Doom Ethernal3', image: 'https://picsum.photos/id/239/200/300', price: '203UAH', description: '3Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 4, selected: false, name: 'Doom Ethernal4', image: 'https://picsum.photos/id/240/200/300', price: '204UAH', description: '4Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 5, selected: false, name: 'Doom Ethernal5', image: 'https://picsum.photos/id/241/200/300', price: '205UAH', description: '5Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ id: 6, selected: false, name: 'Doom Ethernal6', image: 'https://picsum.photos/id/242/200/300', price: '206UAH', description: '6Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' }
		];
		return { users, games };
	}

	constructor() { }
}
