import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AddRoutingModule } from './add-routing.module';

import { AddComponent } from './add.component';

@NgModule({
	declarations: [
        AddComponent
	],
	imports: [
        FlexLayoutModule,
        AddRoutingModule,
		MaterialModule,
	],
})
export class AddModule {
}
