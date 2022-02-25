import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
@Component({
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
	private readonly email = sessionStorage.getItem('userEmail');

	userId: number | null = JSON.parse(sessionStorage.getItem('userId') || '{}');
	subscribtions = new Subscription();

	constructor(
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.profileForm.controls['email'].setValue(this.email);

		this.userService.getUser(this.userId).subscribe(user => {
			this.profileForm.controls['userName'].setValue(user.name);
			this.profileForm.controls['userAge'].setValue(user.age);
		});
	}

	ngOnDestroy(): void {
		this.subscribtions.unsubscribe();
	}

	profileForm = new FormGroup({
		userName: new FormControl(),
		email: new FormControl(),
		userAge: new FormControl()
	});

	onSubmit() {
		this.subscribtions.add(
			this.userService.getUser(this.userId).subscribe(user => {
				user.name = this.profileForm.value.userName;
				user.age = this.profileForm.value.userAge;
				this.userService.updateUser(user).subscribe();
			})
		);
	}
}
