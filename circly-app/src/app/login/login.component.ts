import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/providers/auth.service';

@Component({
	selector: 'login-component',
	styleUrls: ['./login.component.css'],
	templateUrl: './login.component.html'
})
export class LoginComponent {
     constructor(public authService: AuthService, private router:Router) {}

     login() {
         this.authService.loginWithGoogle().then((data) => {
             this.router.navigate(['main']);
         })
     }
}
