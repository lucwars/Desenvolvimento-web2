import { PersistFormService } from '../../../services/download-form-fields.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emailValidator } from './validator';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	constructor(private fb: FormBuilder, private pfs: PersistFormService) {}

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
		this.successMsg = true;
		this.pfs.downloadForm(this.myForm.value);
		this.reset();
	}

	reset() {
		this.myForm.reset();
	}
}
