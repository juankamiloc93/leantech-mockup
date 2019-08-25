import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { MessagesComponent } from './components/views/messages/messages.component';
import { WishlistComponent } from './components/views/wishlist/wishlist.component';
import { SettingsComponent } from './components/views/settings/settings.component';
import { AccountComponent } from './components/views/account/account.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
