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
			{ name: 'Doom Ethernal', price: '200UAH', description: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ name: 'Doom Ethernal2', price: '202UAH', description: '2Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ name: 'Doom Ethernal3', price: '203UAH', description: '3Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ name: 'Doom Ethernal4', price: '204UAH', description: '4Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' },
			{ name: 'Doom Ethernal5', price: '205UAH', description: '5Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.' }
		];
		return { users, games };
	}

	constructor() { }

}
