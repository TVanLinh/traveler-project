import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    SlideBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
