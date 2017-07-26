import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SliderBarOneComponent} from "./components/slide-bars/slider-bar-one/slider-bar-one.component";
import {SlideBarMenuComponent} from "./components/slide-bars/slide-bar-menu/slide-bar-menu.component";
import {HowItWorkComponent} from "./pages/how-it-work/how-it-work.component";
import {CitiesComponent} from "./pages/cities/cities.component";
import {HelpComponent} from "./pages/help/help.component";
import {HomeComponent} from "./pages/home/home.component";
import {MeaningComponent} from "./pages/meaning/meaning.component";
import {SafeComponent} from "./pages/safe/safe.component";
import {ServicesComponent} from "./pages/services/services.component";
import {AppRouting} from "./app-routing.module";
import { TabServiceComponent } from './pages/home/tab-service/tab-service.component';
import { InforComponent } from './pages/home/infor/infor.component';
import { MapComponent } from './pages/home/map/map.component';
import {TaskSevice} from "./services/task.service";
import {HttpModule} from "@angular/http";
import {LanguageService} from "./services/language.service";
import {I18nSelectPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderBarOneComponent,
    SlideBarMenuComponent,
    HowItWorkComponent,
    CitiesComponent,
    HelpComponent,
    HomeComponent,
    MeaningComponent,
    SafeComponent,
    ServicesComponent,
    TabServiceComponent,
    InforComponent,
    MapComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRouting
  ],
  providers: [TaskSevice,
    LanguageService,
    I18nSelectPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
