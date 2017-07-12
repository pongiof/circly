import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent }    from './add.component';

const addRoutes: Routes = [
	{ path: '', component: AddComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(addRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AddRoutingModule { }
