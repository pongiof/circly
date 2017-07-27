import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";

import { fadeInAnimation } from "../../shared/animations/fade.animation";

import { AuthService } from "../../shared/providers/auth/auth.service";
import { CollectionsService } from "../../shared/providers/data/collections.service";

import { model } from "../../shared/protos/model";


@Component({
    selector: "home-component",
    styleUrls: ["./home.component.css"],
    animations: [fadeInAnimation],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    displayLoading = true;
    userDisplayName: string;
    collections: model.Collection[] = [];

    constructor(
        private authService: AuthService,
        private collectionsService: CollectionsService,
        private router: Router) {}

    ngOnInit(): void {
        this.userDisplayName = this.authService.getCurrentUser()!.displayName!;
        this.collectionsService.getAllCollections().subscribe (
            (c) => {
                this.displayLoading = false;
                this.collections.push(c);
            });
    }

    logout(): void {
        this.authService.logout().then(error => {
            this.router.navigate(["/login"]);
        })
    }
}
