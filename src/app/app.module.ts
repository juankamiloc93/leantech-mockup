import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { MessagesComponent } from './components/views/messages/messages.component';
import { WishlistComponent } from './components/views/wishlist/wishlist.component';
import { SettingsComponent } from './components/views/settings/settings.component';
import { AccountComponent } from './components/views/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    WishlistComponent,
    SettingsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
