import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PersistUsers {
	cadastros: Array<User> = [];
	SERVER_URL: string = 'localhost:4200/';

	constructor(private httpClient: HttpClient) {}

	public getUsers() {
		return this.httpClient.get(this.SERVER_URL + 'users');
	}

	public getUser(userId) {
		return this.httpClient.get(`${this.SERVER_URL + 'users'}/${userId}`);
	}

	public searchUser(email: string): Observable<any> {
		email = email.trim();

		const options = email
			? { params: new HttpParams().set('email', email) }
			: {};

		return this.httpClient.get(this.SERVER_URL + 'users', options);
	}

	public createUser(user: User) {
		this.cadastros.push(user);
		console.log(this.cadastros);
		return this.httpClient.post(`${this.SERVER_URL + 'users'}`, user);
	}

	public deleteUser(userId) {
		return this.httpClient.delete(`${this.SERVER_URL + 'users'}/${userId}`);
	}

	public updateUser(user: User) {
		return this.httpClient.put(`${this.SERVER_URL + 'users'}/${user.id}`, user);
	}
}
