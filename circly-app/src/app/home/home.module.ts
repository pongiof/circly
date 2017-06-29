import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module'

import { HomeComponent } from './home.component';

@NgModule({
	declarations: [
        HomeComponent
	],
	imports: [
        FlexLayoutModule,
        HomeRoutingModule,
		MaterialModule,
        SharedComponentsModule
	],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
