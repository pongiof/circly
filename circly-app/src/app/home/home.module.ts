import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module'

@NgModule({
	declarations: [
        HomeComponent
	],
	imports: [
        FlexLayoutModule,
		MaterialModule,
        SharedComponentsModule
	],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
