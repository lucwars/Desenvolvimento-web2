import { Audio } from '../audioMOCK/audio';
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

		const musicas: Audio[] = [
			new Audio(
				1,
				'Mathieu Koss',
				'Big Jet Plane',
				'',
				183,
				'Alok',
				'../../../assets/musicaDiretorio/Alok  Mathieu Koss - Big Jet Plane (Official Lyric Video).mp3'
			),
			new Audio(
				2,
				'Zeeba',
				'Hear Me Now',
				'',
				314,
				'Alok',
				'../../../assets/musicaDiretorio/Alok, Bruno Martini feat. Zeeba - Hear Me Now (Club Edit).mp3'
			),
			new Audio(
				3,
				'Rooftime  |  Dubdogz',
				'Free My Mind',
				'',
				161,
				'Alok',
				'../../../assets/musicaDiretorio/Alok, Rooftime, Dubdogz - Free My Mind.mp3'
			),
			new Audio(
				4,
				'Zeeba  |  IRO',
				'Ocean',
				'',
				174,
				'Alok',
				'../../../assets/musicaDiretorio/Alok, Zeeba, IRO - Ocean (Radio Edit).mp3'
			),
			new Audio(
				5,
				'BTS',
				'Boys with Luv',
				'',
				252,
				'BTS',
				'../../../assets/musicaDiretorio/BTS - Boys with Luv.mp3'
			),
			new Audio(
				6,
				'BTS',
				'DNA',
				'',
				255,
				'BTS',
				'../../../assets/musicaDiretorio/BTS (방탄소년단) DNA Official MV.mp3'
			),
			new Audio(
				7,
				'BTS',
				'IDOL',
				'',
				231,
				'BTS',
				'../../../assets/musicaDiretorio/BTS (방탄소년단) IDOL Official MV.mp3'
			),
			new Audio(
				8,
				'BTS',
				'MIC Drop',
				'',
				274,
				'BTS',
				'../../../assets/musicaDiretorio/BTS (방탄소년단) MIC Drop (Steve Aoki Remix) Official MV.mp3'
			),
			new Audio(
				9,
				'Coldplay',
				'Adventure Of A Lifetime',
				'',
				315,
				'Coldplay',
				'../../../assets/musicaDiretorio/Coldplay - Adventure Of A Lifetime (Official video).mp3'
			),
			new Audio(
				10,
				'Coldplay',
				'Hymn For The Weekend',
				'',
				260,
				'Coldplay',
				'../../../assets/musicaDiretorio/Coldplay - Hymn For The Weekend (Official video).mp3'
			),
			new Audio(
				11,
				'Coldplay',
				'Up&Up',
				'',
				250,
				'Coldplay',
				'../../../assets/musicaDiretorio/Coldplay - Up&Up (Official video).mp3'
			),
			new Audio(
				12,
				'Coldplay',
				'Viva La Vida',
				'',
				242,
				'Coldplay',
				'../../../assets/musicaDiretorio/Coldplay-Viva La Vida.mp3'
			),
			new Audio(
				13,
				'Fatoumata Diawara',
				'Désolé',
				'',
				236,
				'Gorillaz',
				'../../../assets/musicaDiretorio/Gorillaz - Désolé (feat. Fatoumata Diawara).mp3'
			),
			new Audio(
				14,
				'Gorillaz',
				'Feel Good Inc.',
				'',
				258,
				'Gorillaz',
				'../../../assets/musicaDiretorio/Gorillaz - Feel Good Inc. (Remastered).mp3'
			),
			new Audio(
				15,
				'Pusha T  |  Mavis Staples',
				'Let Me Out',
				'',
				175,
				'Gorillaz',
				'../../../assets/musicaDiretorio/Gorillaz - Let Me Out (Art Track).mp3'
			),
			new Audio(
				16,
				'Gorillaz',
				'Clint Eastwood',
				'',
				343,
				'Gorillaz',
				'../../../assets/musicaDiretorio/Gorillaz-ClintEastwood.mp3'
			),
			new Audio(
				17,
				'Imagine Dragons',
				'Believer',
				'',
				216,
				'Imagine Dragons',
				'../../../assets/musicaDiretorio/Imagine Dragons - Believer.mp3'
			),
			new Audio(
				18,
				'Imagine Dragons',
				'Radioactive',
				'',
				189,
				'Imagine Dragons',
				'../../../assets/musicaDiretorio/Imagine Dragons - Radioactive.mp3'
			),
			new Audio(
				19,
				'Imagine Dragons',
				'Thunder',
				'',
				204,
				'Imagine Dragons',
				'../../../assets/musicaDiretorio/Imagine Dragons - Thunder.mp3'
			),
			new Audio(
				20,
				'Imagine Dragons',
				'Warriors',
				'',
				170,
				'Imagine Dragons',
				'../../../assets/musicaDiretorio/Imagine Dragons- Warrios.mp3'
			),
			new Audio(
				21,
				'Pink Floyd',
				'Time',
				'',
				380,
				'Pink Floyd',
				'../../../assets/musicaDiretorio/Pink Floyd -  Time.mp3'
			),
			new Audio(
				22,
				'Pink Floyd',
				'Another Brick In The Wall',
				'',
				299,
				'Pink Floyd',
				'../../../assets/musicaDiretorio/Pink Floyd - Another Brick In The Wall.mp3'
			),
			new Audio(
				23,
				'Pink Floyd',
				'Comfortably Numb',
				'',
				414,
				'Pink Floyd',
				'../../../assets/musicaDiretorio/Pink Floyd - Comfortably Numb.mp3'
			),
			new Audio(
				24,
				'Pink Floyd',
				'Wish You Were Here',
				'',
				334,
				'Pink Floyd',
				'../../../assets/musicaDiretorio/Pinky Floyd - Wish You Were Here.mp3'
			),
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

		return { users, playlists, musicas };
	}
}
