import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from "@angular/core";
import { MaterialModule } from "@angular/material";

import { LoginRoutingModule } from "./login-routing.module";

import { SharedComponentsModule } from "../shared/components/shared-components.module"

import { LoginComponent } from "./login.component";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FlexLayoutModule,
        MaterialModule,
        SharedComponentsModule
    ],
})
export class LoginModule {
}
