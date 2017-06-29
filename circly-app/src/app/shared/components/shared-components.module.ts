import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
	declarations: [
		LoadingComponent,
	],
	imports: [
		MaterialModule,
	],
	exports: [
		LoadingComponent,
	],
})
export class SharedComponentsModule {
}
