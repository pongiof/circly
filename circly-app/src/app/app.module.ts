import 'hammerjs';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule} from 'angularfire2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './shared/providers/auth.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'main', loadChildren: './main/main.module#MainModule' },
];

export const firebaseConfig = {
    apiKey: "AIzaSyBksXoQ_se1zfP2wLl2wktyDAeEO1AKlLc",
    authDomain: "circly-b5562.firebaseapp.com",
    databaseURL: "https://circly-b5562.firebaseio.com",
    projectId: "circly-b5562",
    storageBucket: "circly-b5562.appspot.com",
    messagingSenderId: "114647567771"
  };

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(firebaseConfig),
		BrowserAnimationsModule,
		BrowserModule,
		MaterialModule,
        RouterModule.forRoot(appRoutes),
	],
	providers: [
        AuthService
    ],
	bootstrap: [AppComponent]
})
export class AppModule { }
