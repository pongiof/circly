import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { fadeInAnimation } from '../../shared/animations/fade.animations';

import { AuthService } from '../../shared/providers/auth.service';

@Component({
	selector: 'home-component',
	styleUrls: ['./home.component.css'],
    animations: [fadeInAnimation],
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    private userDisplayName:string;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.userDisplayName = this.authService.getCurrentUser().displayName;
    }

    logout(): void {
        this.authService.logout().then(error => {
            this.router.navigate(["/login"]);
        })
    }
}
