import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SharedComponentsModule } from './shared/components/shared-components.module'

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
        FlexLayoutModule,
		MaterialModule,
        SharedComponentsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
