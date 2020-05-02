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
		this.searchUser(this.myForm.value.email, this.myForm.value.password);
		this.successMsg = true;
		this.reset();
	}

	reset() {
		this.myForm.reset();
	}

	searchUser(email: string, password: string) {
		this.pu.getUser(email).subscribe((ret: User) => {
			if (password == ret.password) {
				console.log('usuário encontrado: ', ret);
				this.router.navigate(['/profile', ret.id]);
			}
		});
	}
}
