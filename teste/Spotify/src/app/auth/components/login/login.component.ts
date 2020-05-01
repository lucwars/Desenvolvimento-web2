import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	constructor(private fb: FormBuilder) {}

	myForm: FormGroup;
	successMsg: boolean = false;

	ngOnInit(): void {
		this.myForm = this.fb.group({
			email: '',
			password: '',
		});

		this.myForm.controls.email.valueChanges.subscribe((x) =>
			this.myForm.controls.emailConfirmation.updateValueAndValidity()
		);
	}

	onSubmit(): void {
		this.successMsg = true;
		this.reset();
	}

	reset() {
		this.myForm.reset();
	}
}
