import { PlaylistSelectedComponent } from './playlist-selected/playlist-selected.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCaseComponent } from './show-case/show-case.component';
import { FaqComponent } from './faq/faq.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';

const routes: Routes = [
	{ path: '', component: ShowCaseComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'playlist', component: PlaylistComponent },
	{ path: 'audioplayer', component: AudioplayerComponent },
	{ path: 'playlist-selected/:id', component: PlaylistSelectedComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
