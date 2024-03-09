import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ViewEmojiComponent } from './components/view-emoji/view-emoji.component';

import { NgIconsModule } from '@ng-icons/core';
import { matSearch } from '@ng-icons/material-icons/baseline'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ViewEmojiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ matSearch}),
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
