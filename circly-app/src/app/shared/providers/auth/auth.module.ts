import { AngularFireAuthModule } from "angularfire2/auth";
import { NgModule } from "@angular/core";

import { AuthService } from "./auth.service";

@NgModule({
    imports: [
        AngularFireAuthModule,
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule { }
