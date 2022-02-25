import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from '../../interfaces/game';
import { GamesService } from '../../services/games.service';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit, OnDestroy {

	public loading = false;
	games: Game[] = [];
	userGames: Game[] = [];
	subscribtions = new Subscription();

	constructor(
		private gamesService: GamesService,
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.getGames();
	}

	ngOnDestroy(): void {
		this.subscribtions.unsubscribe();
	}

	getGames(): void {
		this.subscribtions.add(
			this.gamesService.getGames()
				.subscribe(games => {
					this.games = games;
					this.getUser();
				})
		);
	}

	getUser(): void {
		const userId: number | null = JSON.parse(sessionStorage.getItem('userId') || '{}');
		this.loading = true;
		this.subscribtions.add(
			this.userService.getUser(userId).subscribe(user => {
				user.library.forEach(el1 => {
					this.games.forEach(el2 => {
						if (el1 === el2.id) {
							this.userGames.push(el2);
						}
					});
				})
				this.loading = false;
			})
		);
	}
}
