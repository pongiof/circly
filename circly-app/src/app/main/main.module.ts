import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SharedComponentsModule } from '../shared/components/shared-components.module'

import { MainRoutingModule } from './main-routing.module';

import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';


@NgModule({
	declarations: [
        AddComponent,
        HomeComponent,
		MainComponent
	],
	imports: [
        FlexLayoutModule,
		MaterialModule,
        MainRoutingModule,
        SharedComponentsModule
	],
	providers: [],
})
export class MainModule { }
