import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../interfaces/game';

@Injectable({
	providedIn: 'root'
})
export class GamesService {

	constructor(
		private http: HttpClient
	) { }

	getGames(): Observable<Game[]> {
		return this.http.get<Game[]>('api/games');
	}

	addToLibrary(game: Game): Observable<any> {
		return this.http.put('api/games', game);
	}

	getUserGames(arr: number[]) {
		return this.http.get<Game[]>('api/games');
	}

	searchGames(term: string): Observable<Game[]> {
		if (!term.trim()) {
			return this.http.get<Game[]>('api/games');
		}
		return this.http.get<Game[]>(`api/games/?name=${term}&selected=false`);
	}
}
