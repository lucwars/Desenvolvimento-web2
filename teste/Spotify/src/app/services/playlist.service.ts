import { Playlists } from './../playlistMock/playlist-mock';
import { Playlist } from './../playlistMock/playlist';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class PlaylistService {
	constructor() {}

	all(): Playlist[] {
		return Playlists;
	}

	show(i: number): Playlist {
		return Playlists[i];
	}
}
