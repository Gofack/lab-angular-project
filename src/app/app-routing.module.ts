import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { GamesComponent } from './components/games/games.component'
import { LibraryComponent } from './components/library/library.component'
import { FriendsComponent } from './components/friends/friends.component'
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'games', component: GamesComponent, canActivate: [AuthGuard] },
	{ path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
	{ path: 'friends', component: FriendsComponent, canActivate: [AuthGuard] },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
	{ path: '**', component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
