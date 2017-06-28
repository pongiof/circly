import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
	declarations: [
		LoadingComponent,
	],
	imports: [
        FlexLayoutModule,
		MaterialModule,
	],
	exports: [
		LoadingComponent,
	],
})
export class SharedComponentsModule {
}
