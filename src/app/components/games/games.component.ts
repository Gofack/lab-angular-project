import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Game } from '../../interfaces/game';
import { GamesService } from '../../services/games.service';
import { LibraryService } from '../../services/library.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

	public loading = false;
	games: Game[] = [];

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(
		private gamesService: GamesService,
		private libraryService: LibraryService,
		private http: HttpClient
	) { }

	ngOnInit(): void {
		this.getGames();
	}

	searchGameForm = new FormGroup({
		search: new FormControl(),
	});

	getGames(): void {
		this.loading = true;
		this.gamesService.getGames()
			.subscribe(games => {
				this.games = games;
				this.loading = false;
			});
	}

	addToLibrary(game: Game) {
		this.loading = true;
		game.selected = true;
		this.gamesService.addToLibrary(game).subscribe(games => {
			this.loading = false;
			this.games = games
		});
		console.log(this.games);
		this.ngOnInit();
	}

	searchGame(): void {

	}
}
