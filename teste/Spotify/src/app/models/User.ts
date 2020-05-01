export class User {
	id: number;
	email: string;
	username: string;
	password: string;
	dayOfBirth: string;
	monthOfBirth: string;
	yearOfBirth: string;
	gender: string;

	constructor(
		id: number,
		email: string,
		username: string,
		password: string,
		dayOfBirth: string,
		monthOfBirth: string,
		yearOfBirth: string,
		gender: string
	) {
		this.id = id;
		this.email = email;
		this.username = username;
		this.password = password;
		this.dayOfBirth = dayOfBirth;
		this.monthOfBirth = monthOfBirth;
		this.yearOfBirth = yearOfBirth;
		this.gender = gender;
	}
}
