import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ViewEmojiComponent } from './components/view-emoji/view-emoji.component';

import { NgIconsModule } from '@ng-icons/core';
import { matAutoAwesome, matWbSunny, matDarkMode, matMoreHoriz, matCheck } from '@ng-icons/material-icons/baseline'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ContainerEmojisComponent } from './components/container-emojis/container-emojis.component';
import { SetThemeComponent } from './components/set-theme/set-theme.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ViewEmojiComponent,
    ContainerEmojisComponent,
    SetThemeComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ matAutoAwesome, matWbSunny, matDarkMode, matMoreHoriz, matCheck }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
