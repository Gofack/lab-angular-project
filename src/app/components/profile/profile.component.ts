import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	private readonly email = sessionStorage.getItem('userEmail');
	private readonly name = sessionStorage.getItem('userName');
	private readonly age = sessionStorage.getItem('userAge');

	constructor() { }

	ngOnInit(): void {
		this.profileForm.controls['email'].setValue(this.email);
		this.profileForm.controls['userName'].setValue(this.name);
		this.profileForm.controls['userAge'].setValue(this.age);
	}

	profileForm = new FormGroup({
		userName: new FormControl(),
		email: new FormControl(),
		userAge: new FormControl()
	});

	onSubmit() {
		sessionStorage.setItem('userName', this.profileForm.value.userName);
		sessionStorage.setItem('userAge', this.profileForm.value.userAge);
		this.profileForm.controls['userName'].setValue(sessionStorage.getItem('userName'));
		this.profileForm.controls['userAge'].setValue(sessionStorage.getItem('userAge'));
	}
}
