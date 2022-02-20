import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class LibraryService {

	library: Game[] = [];

	constructor(
		private http: HttpClient
	) { }

	addToLibrary(game: Game): void {
		// game.selected = true;
		// this.http.put('api/games', game).subscribe(games => {
		// 	// 		// this.games = games;
		// 	// 		// this.loading = false;
		// 	// console.log(games);
		// });
		// this.library.push(game);
		// console.log(this.library);
	}
}
