import { PlaylistSelectedComponent } from './playlist-selected/playlist-selected.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { FaqComponent } from './faq/faq.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';
import { from } from 'rxjs';

const routes: Routes = [
	{ path: '', component: ShowCaseComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'playlist', component: PlaylistComponent },
	{ path: 'cadastro', component: CadastroComponent },
	{ path: 'audioplayer', component: AudioplayerComponent },
	{ path: 'playlist-selected/:id', component: PlaylistSelectedComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
