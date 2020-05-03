import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PersistUsers {
	cadastros: Array<User> = [];
	SERVER_URL: string = 'localhost:4200/';

	constructor(private http: HttpClient) {}

	public getUsers() {
		return this.http.get(this.SERVER_URL + 'users');
	}

	public getUser(userId) {
		return this.http.get(`${this.SERVER_URL + 'users'}/${userId}`);
	}

	public searchUser(email: string): Observable<any> {
		email = email.trim();

		const options = email
			? { params: new HttpParams().set('email', email) }
			: {};

		return this.http.get(this.SERVER_URL + 'users', options);
	}

	public createUser(user: User) {
		this.cadastros.push(user);
		console.log(this.cadastros);
		return this.http.post(`${this.SERVER_URL + 'users'}`, user);
	}

	public deleteUser(user: User) {
		console.log('cheguei no users.service.ts, id do user: ', user.id);
		return this.http.delete(`${this.SERVER_URL + 'users'}/${user.id}`);
	}

	public updateUser(user: User) {
		return this.http.put(`${this.SERVER_URL + 'users'}/${user.id}`, user);
	}
}
