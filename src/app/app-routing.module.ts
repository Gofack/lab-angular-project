import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GamesComponent } from './games/games.component'
import { LibraryComponent } from './library/library.component'
import { FriendsComponent } from './friends/friends.component'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'games', component: GamesComponent },
	{ path: 'library', component: LibraryComponent },
	{ path: 'friends', component: FriendsComponent },
	{ path: 'profile', component: ProfileComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
