import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Playlist } from '../playlistMock/playlist';
import { AudioMock } from '../audioMock/audio-mock';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	constructor() {}

	createDb() {
		const users = [
			{
				playlist: [],
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

		const playlists: Playlist[] = [
			new Playlist(
				0,
				'Alok',
				'../../../assets/imagemDiretorio/Alok-album.jpg',
				'Alok',
				1,
				[AudioMock[0], AudioMock[1], AudioMock[2], AudioMock[3]]
			),
			new Playlist(
				1,
				'BTS',
				'../../../assets/imagemDiretorio/bts-album.jpg',
				'BTS',
				1,
				[AudioMock[4], AudioMock[5], AudioMock[6], AudioMock[7]]
			),
			new Playlist(
				2,
				'Coldplay',
				'../../../assets/imagemDiretorio/ColdPlay-album.png',
				'Coldplay',
				1,
				[AudioMock[8], AudioMock[9], AudioMock[10], AudioMock[11]]
			),
			new Playlist(
				3,
				'Gorillaz',
				'../../../assets/imagemDiretorio/Gorillaz-album.jpg',
				'Gorillaz',
				1,
				[AudioMock[12], AudioMock[13], AudioMock[14], AudioMock[15]]
			),
			new Playlist(
				4,
				'Imagine Dragons',
				'../../../assets/imagemDiretorio/Imagine Dragons-album.jpg',
				'Imagine Dragons',
				1,
				[AudioMock[16], AudioMock[17], AudioMock[18], AudioMock[19]]
			),
			new Playlist(
				5,
				'Pink Floyd',
				'../../../assets/imagemDiretorio/pinkfloyd.jpg',
				'Pink Floyd',
				1,
				[AudioMock[20], AudioMock[21], AudioMock[22], AudioMock[23]]
			),
		];

		return { users, playlists };
	}
}
