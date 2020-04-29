import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ShowCaseComponent } from "./show-case/show-case.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { AudioplayerComponent } from './audioplayer/audioplayer.component';
import { PlaylistSelectedComponent } from './playlist-selected/playlist-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShowCaseComponent,
    FooterComponent,
    PlaylistComponent,
    CadastroComponent,
    AudioplayerComponent,
    PlaylistSelectedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
