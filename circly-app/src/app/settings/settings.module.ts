import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsComponent } from './settings.component';


@NgModule({
	declarations: [
        SettingsComponent
    ],
	imports: [
        FlexLayoutModule,
		MaterialModule,
        SettingsRoutingModule,
	],
})
export class SettingsModule {
}
