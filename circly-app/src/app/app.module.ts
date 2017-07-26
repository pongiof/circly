import 'hammerjs';

import { AngularFireModule} from 'angularfire2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthModule} from './shared/providers/auth/auth.module';
import { DataModule } from './shared/providers/data/data.module';

import { LoginAuthGuard } from './shared/guards/login-guard.service';
import { MainAuthGuard } from './shared/guards/main-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule', canLoad: [LoginAuthGuard] },
    { path: 'main', loadChildren: './main/main.module#MainModule', canLoad: [MainAuthGuard] },
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
        AngularFireModule.initializeApp(firebaseConfig),
        AuthModule,
		BrowserAnimationsModule,
		BrowserModule,
        DataModule,
		MaterialModule,
        RouterModule.forRoot(appRoutes),
	],
	providers: [
        LoginAuthGuard,
        MainAuthGuard,
    ],
	bootstrap: [AppComponent]
})
export class AppModule { }
