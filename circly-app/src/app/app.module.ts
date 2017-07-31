import "hammerjs";

import { AngularFireModule} from "angularfire2";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "@angular/material";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { AuthModule} from "./shared/providers/auth/auth.module";
import { DataModule } from "./shared/providers/data/data.module";

import { LoginAuthGuard } from "./shared/guards/login-guard.service";
import { MainAuthGuard } from "./shared/guards/main-guard.service";

const appRoutes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule", canLoad: [LoginAuthGuard] },
    { path: "main", loadChildren: "./main/main.module#MainModule", canLoad: [MainAuthGuard] },
];

export const firebaseConfig = {
    apiKey: "AIzaSyBPKCe7bYmPwP75-w67yv_k5vccyvm_i5k",
    authDomain: "circly-174919.firebaseapp.com",
    databaseURL: "https://circly-174919.firebaseio.com",
    projectId: "circly-174919",
    storageBucket: "circly-174919.appspot.com",
    messagingSenderId: "533007460876"
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
        RouterModule.forRoot(appRoutes),
    ],
    providers: [
        LoginAuthGuard,
        MainAuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
