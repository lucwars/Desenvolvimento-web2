import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ShowCaseComponent } from "./show-case/show-case.component";
import { FaqComponent } from "./faq/faq.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { from } from "rxjs";

const routes: Routes = [
  { path: "", component: ShowCaseComponent },
  { path: "faq", component: FaqComponent },
  { path: "playlists", component: PlaylistComponent },
  { path: "cadastro", component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
