import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersistUsers } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private pu: PersistUsers,
		private router: Router
	) {}

	myForm: FormGroup;
	successMsg: boolean = false;

	ngOnInit(): void {
		this.myForm = this.fb.group({
			email: '',
			password: '',
		});
	}

	onSubmit(): void {
		this.login(this.myForm.value.email);

		this.reset();
	}

	reset() {
		this.myForm.reset();
	}

	login(email: string) {
		this.pu.searchUser(email).subscribe((ret) => {
			console.log(ret);
			let user = ret[0];
			localStorage.setItem('user', JSON.stringify(user));
			this.router.navigate(['/profile', user.id]);
		});
	}
}
