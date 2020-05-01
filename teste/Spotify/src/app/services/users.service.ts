import { User } from './../models/User';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class PersistUsers {
	cadastros: Array<User> = [];

	constructor() {}

	persistUser(user: User) {
		this.cadastros.push(user);
		console.log(this.cadastros);
	}
}
