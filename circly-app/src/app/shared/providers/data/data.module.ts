import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CollectionsService } from './collections.service';

@NgModule({
	imports: [
        HttpClientModule
    ],
    providers: [
        CollectionsService
    ]
})
export class DataModule { }
