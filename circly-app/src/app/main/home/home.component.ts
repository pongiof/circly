import { Component } from '@angular/core';
import { fadeInAnimation } from '../../shared/animations/fade.animations';

import { AuthService } from '../../shared/providers/auth.service';

@Component({
	selector: 'home-component',
	styleUrls: ['./home.component.css'],
    animations: [fadeInAnimation],
	templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private authService: AuthService) {}

    logout(): void {
        this.authService.loginWithGoogle();
    }
}
