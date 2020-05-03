import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	constructor() {}

	createDb() {
		const users = [
			{
				id: 0,
				email: 't@g.com',
				username: 'Root',
				password: 'admin',
				dayOfBirth: 12,
				monthOfBirth: 12,
				yearOfBirth: '1212',
				gender: 'Masculino',
			},
		];
		return { users };
	}
}
