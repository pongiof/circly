import { AngularFireAuthModule } from "angularfire2/auth";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AuthInterceptor } from "./auth.interceptor";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [
        AngularFireAuthModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        AuthService
    ]
})
export class AuthModule { }
