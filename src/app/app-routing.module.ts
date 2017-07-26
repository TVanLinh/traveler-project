import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {HowItWorkComponent} from "./pages/how-it-work/how-it-work.component";
import {MeaningComponent} from "./pages/meaning/meaning.component";
import {SafeComponent} from "./pages/safe/safe.component";
import {ServicesComponent} from "./pages/services/services.component";
import {HelpComponent} from "app/pages/help/help.component";
import {CitiesComponent} from "./pages/cities/cities.component";


const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "how-it-work", component: HowItWorkComponent},
  {path: "meanging", component: MeaningComponent},
  {path: "safety", component: SafeComponent},
  {path: "service", component: ServicesComponent},
  {path: "help", component: HelpComponent},
  {path: "cities", component: CitiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {

}
