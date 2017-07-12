import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
	declarations: [
        LoginComponent
	],
	imports: [
        LoginRoutingModule,
        FlexLayoutModule,
		MaterialModule,
	],
})
export class LoginModule {
}
