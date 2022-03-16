import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Game } from '../../interfaces/game';
import { User } from '../../interfaces/user';
import { GamesService } from '../../services/games.service';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, OnDestroy {

	public loading = false;
	games: Game[] = [];
	filteredGames: Game[] = [];
	innerFilteredGames: Game[] = [];
	filterSection = false;
	genresArr: string[] = [];
	user: User | undefined;

	sliderMax: number = 0;
	sliderMin: number = 0;
	value: number | null = 0;

	subscribtions = new Subscription();
	filterForm: FormGroup = new FormGroup({
		slider: new FormControl(this.sliderMax),
	});

	constructor(
		private gamesService: GamesService,
		private userService: UserService,
	) { }

	ngOnInit(): void {
		this.getGames();
		this.subscribtions.add(
			this.searchGameForm.controls['search'].valueChanges.subscribe((value: string) => {
				if (!value) {
					this.innerFilteredGames = this.filteredGames;
				}
			})
		);
	}

	ngOnDestroy(): void {
		this.subscribtions.unsubscribe();
	}

	searchGameForm = new FormGroup({
		search: new FormControl(),
	});

	getGames(): void {
		this.loading = true;
		this.subscribtions.add(
			this.gamesService.getGames()
				.subscribe(games => {
					this.games = games;
					this.filteredGames = games;
					this.loading = false;
					this.initSlider();
					this.getGenres();
					this.createCheckboxes();
				})
		);
	}

	addToLibrary(game: Game) {
		const userId: number | null = JSON.parse(sessionStorage.getItem('userId') || '{}');
		const gameId = game.id;
		this.loading = true;
		game.selected = true;
		this.subscribtions.add(
			this.gamesService.addToLibrary(game).subscribe(() => {
				this.loading = false;
			})
		);
		this.subscribtions.add(
			this.userService.getUser(userId).subscribe(user => {
				user.library.push(gameId);
				this.userService.updateUser(user).subscribe(user => {
					this.user = user;
				});
			})
		);
	}

	searchGame(term: string): void {
		this.filterSection = true;

		this.innerFilteredGames = this.filteredGames.filter(el => {
			console.log(el.name);
			if (el.name.includes(term)) {
				return el;
			}
			return false;
		});
	}

	initSlider() {
		const prices = this.games.map(game => parseInt(game.price));
		const max = prices.reduce((a, b) => Math.max(a, b));
		const min = prices.reduce((a, b) => Math.min(a, b));
		this.sliderMax = max;
		this.sliderMin = min;
		this.value = this.sliderMax;
		this.filterForm.controls['slider'].setValue(max);
	}

	getGenres() {
		this.games.forEach(el => {
			el.genre.forEach(el => {
				if (!this.genresArr.includes(el)) {
					this.genresArr.push(el);
				}
			});
		});
	}

	createCheckboxes() {
		this.genresArr.forEach(el => {
			this.filterForm.addControl(el, new FormControl(false));
		});
	}

	onFiltersChange() {
		this.filterSection = true;
		let formObj = this.filterForm.value;
		let genresArr: string[] = [];

		for (let key in formObj) {
			if (formObj[key] === true) {
				genresArr.push(key);
			}
		}

		if (!genresArr.length) {
			this.innerFilteredGames = this.filteredGames;
		}

		if (formObj.slider) {
			this.value = formObj.slider;
			this.innerFilteredGames = this.filteredGames.filter(game => parseInt(game.price) <= formObj.slider);
		}

		genresArr.forEach(el => {
			if (genresArr.length > 1) {
				this.innerFilteredGames = this.innerFilteredGames.filter(game => {
					if (game.genre.includes(el) && parseInt(game.price) <= formObj.slider) {
						return game;
					}
					return false;
				});
			} else {
				this.innerFilteredGames = this.filteredGames.filter(game => {
					if (game.genre.includes(el) && parseInt(game.price) <= formObj.slider) {
						return game;
					}
					return false;
				});
			}
		});
	}
}
