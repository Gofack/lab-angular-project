import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsComponent } from './components/friends/friends.component';
import { LibraryComponent } from './components/library/library.component';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ProfileComponent,
		FriendsComponent,
		LibraryComponent,
		GamesComponent,
		LoginComponent,
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		),
		NoopAnimationsModule,
		NgxLoadingModule.forRoot({
			animationType: ngxLoadingAnimationTypes.circle,
			backdropBackgroundColour: 'rgba(0,0,0,0)',
			backdropBorderRadius: '4px',
			primaryColour: '#0d6efd',
			secondaryColour: '#fff',
			tertiaryColour: '#ffffff'
		}),
		MatButtonModule,
		MatCheckboxModule,
		MatSliderModule,
		MatInputModule
	],
	providers: [
		AuthGuard
	],
	bootstrap: [AppComponent],
	exports: [
	]
})
export class AppModule { }
