import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public loading_route: boolean = true;

    constructor(private router: Router) {
        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }

    private navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading_route = true;
        }
        if (event instanceof NavigationEnd) {
            this.loading_route = false;
        }
        if (event instanceof NavigationCancel) {
            this.loading_route = false;
        }
        if (event instanceof NavigationError) {
            this.loading_route = false;
        }
    }
}
