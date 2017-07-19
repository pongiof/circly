import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'add',
                component: AddComponent,
            }
        ]
    },
];
@NgModule({
	imports: [
		RouterModule.forChild(mainRoutes)
	],
	exports: [
		RouterModule
	]
})
export class MainRoutingModule { }
