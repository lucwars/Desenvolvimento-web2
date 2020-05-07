import { Playlists } from './../playlistMock/playlist-mock';
import { Playlist } from './../playlistMock/playlist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PlaylistService {
	SERVER_URL: string = 'localhost:4200/';
	constructor(private http: HttpClient) {}

	all(): Observable<Playlist[]> {
		return this.http.get<Playlist[]>(`api/playlists`);
	}

	show(i: number): Observable<Playlist> {
		return this.http.get<Playlist>(`api/playlists/${i}`);
	}
}
