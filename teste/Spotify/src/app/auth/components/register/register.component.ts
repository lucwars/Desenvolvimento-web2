import { User } from './../../../models/User';
import { PersistUsers } from '../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emailValidator } from './validator';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	constructor(private fb: FormBuilder, private pu: PersistUsers) {}

	myForm: FormGroup;
	successMsg: boolean = false;

	ngOnInit(): void {
		this.myForm = this.fb.group({
			email: '',
			emailConfirmation: ['', emailValidator],
			password: '',
			username: '',
			dayOfBirth: '',
			monthOfBirth: '',
			yearOfBirth: '',
			gender: '',
		});

		this.myForm.controls.email.valueChanges.subscribe((x) =>
			this.myForm.controls.emailConfirmation.updateValueAndValidity()
		);
	}

	onSubmit(): void {
		let user = new User(
			this.myForm.value.email,
			this.myForm.value.username,
			this.myForm.value.password,
			this.myForm.value.dayOfBirth,
			this.myForm.value.monthOfBirth,
			this.myForm.value.yearOfBirth,
			this.myForm.value.gender
		);
		this.successMsg = true;
		this.pu.persistUser(user);
		this.reset();
	}

	reset() {
		this.myForm.reset();
	}
}
