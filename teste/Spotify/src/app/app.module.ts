import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';
import { PlaylistSelectedComponent } from './playlist-selected/playlist-selected.component';
import { AuthModule } from './auth/auth.module';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		ShowCaseComponent,
		FooterComponent,
		PlaylistComponent,
		AudioplayerComponent,
		PlaylistSelectedComponent,
		ProfileComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		AuthModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
