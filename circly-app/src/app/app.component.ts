import { Component } from "@angular/core";
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    loadingRoute = true;

    constructor(private router: Router) {
        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }

    private navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loadingRoute = true;
        }
        if (event instanceof NavigationEnd) {
            this.loadingRoute = false;
        }
        if (event instanceof NavigationCancel) {
            this.loadingRoute = false;
        }
        if (event instanceof NavigationError) {
            this.loadingRoute = false;
        }
    }
}
