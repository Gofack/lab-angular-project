import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
