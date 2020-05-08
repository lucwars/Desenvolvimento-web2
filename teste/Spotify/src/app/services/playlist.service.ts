import { tap } from 'rxjs/internal/operators';
import { Audio } from './../audioMOCK/audio';
import { Playlists } from './../playlistMock/playlist-mock';
import { Playlist } from './../playlistMock/playlist';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

	search(term: string): Observable<Audio[]> {
		term = term.trim();

		const options = term ? { params: new HttpParams().set('name', term) } : {};

		return this.http.get<Audio[]>(this.SERVER_URL + 'musicas', options);
	}
}
