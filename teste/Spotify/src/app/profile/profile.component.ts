import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersistUsers } from '../services/users.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
	userId: number;
	user: User;

	constructor(
		private route: ActivatedRoute,
		private pu: PersistUsers,
		private router: Router
	) {}

	ngOnInit(): void {
		this.userId = Number(this.route.snapshot.paramMap.get('id'));
		this.searchUser(this.userId);
	}

	searchUser(id: number) {
		this.pu.getUser(id).subscribe((ret: User) => {
			this.user = ret;
		});
	}

	onDelete(user: User) {
		this.pu.deleteUser(this.user);
		this.router.navigate(['/register']);
	}

	onEdit(userId: number) {}
}
