import { Component } from '@angular/core';

import { AuthService } from '../shared/providers/auth.service';

@Component({
	selector: 'login-component',
	styleUrls: ['./login.component.css'],
	templateUrl: './login.component.html'
})
export class LoginComponent {
     constructor(private authService: AuthService) {}

     login(): void {
         this.authService.loginWithGoogle();
     }
}
