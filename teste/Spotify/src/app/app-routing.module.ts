import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ShowCaseComponent } from "./show-case/show-case.component";
import { FaqComponent } from "./faq/faq.component";

const routes: Routes = [
  { path: "", component: ShowCaseComponent },
  { path: "faq", component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
