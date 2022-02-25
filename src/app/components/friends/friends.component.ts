import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Subscription } from 'rxjs';

@Component({
	templateUrl: './friends.component.html',
	styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, OnDestroy {

	public loading = false;

	userId: number | null = JSON.parse(sessionStorage.getItem('userId') || '{}');
	userFriends: User[] = [];
	user: User | undefined;
	users: User[] = [];
	query: string = '';
	searchQuery = false;
	subscribtions = new Subscription();

	searchFriendsForm: FormGroup = new FormGroup({
		search: new FormControl()
	})

	constructor(
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.getFriends();
	}

	ngOnDestroy(): void {
		this.subscribtions.unsubscribe();
	}

	getFriends() {
		this.loading = true;
		this.subscribtions.add(
			this.userService.getUser(this.userId).subscribe(user => {
				this.userFriends = [];
				user.friends.forEach(el => {
					this.userService.getUser(el).subscribe(user => {
						this.userFriends.push(user);
					})
				});
				this.loading = false
			})
		)
	}

	searchFriends(term: string) {
		this.searchQuery = true;
		if (term !== '') {
			this.userService.searchUsers(term).subscribe(users => {
				const unknowUsers: User[] = [];
				users.forEach(user => {
					let exist = this.userFriends.find(friend => friend.id === user.id);
					if (exist === undefined) {
						unknowUsers.push(user);
					}
				});
				if (unknowUsers.length) {
					this.users = unknowUsers;
				}
				this.query = this.searchFriendsForm.value.search;
			})
		} else {
			this.searchQuery = false;
		}
		this.users = [];
	}

	removeFriend(friend: User) {
		let friendId = friend.id;
		this.userService.getUser(this.userId).subscribe(user => {
			user.friends.forEach((el, i) => {
				if (el === friendId) {
					user.friends.splice(i, 1);
				}
			});
			this.userService.updateUser(user).subscribe(() => {
				this.getFriends();
			});
		});
	}

	addFriend(friend: User) {
		this.userService.getUser(this.userId).subscribe(user => {
			if (!user.friends.includes(friend.id)) {
				user.friends.push(friend.id);
			}
			this.userService.updateUser(user).subscribe(() => {
				this.getFriends();
			});
		});
		this.searchFriends('');
	}
}
