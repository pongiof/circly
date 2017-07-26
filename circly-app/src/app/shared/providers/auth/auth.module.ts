import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';

import { model } from '../../protos/model';

@NgModule({
	declarations: [
        AuthService,
	],
	imports: [
        AngularFireAuthModule,
	],
})
export class AuthModule { }
