import "rxjs/add/observable/from";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";


@Injectable()
export class AuthService {

    private currentUser: firebase.User;
    private token: object;

    constructor(private afAuth: AngularFireAuth, private router: Router) {}

    private isUserLoggedIn(): boolean {
        return !!this.currentUser;
    }

    loginWithGoogle(): void {
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    loginObservable(): Observable<boolean> {
        return this.afAuth.authState.
            switchMap((authState: firebase.User) => {
                return !!authState ? Observable.fromPromise(authState.getIdToken(true)) :
                    Observable.from([null]);
            })
            .map((token: object) => {
                this.token = token;
                return !!token;
            });
    }

    logout(): firebase.Promise < any > {
        return this.afAuth.auth.signOut();
    }

    refreshCredentials(): void {
        this.afAuth.authState.subscribe(authState => {
            this.currentUser = authState;
            if (authState) {
                authState.getIdToken(true).then((token: object) => { this.token = token });
            } else {
                this.router.navigate(["/login"]);
            }
        });
    }

    getCurrentUser(): firebase.User | null {
        if (!this.isUserLoggedIn) { return null; }
        return this.currentUser;
    }

    getCurrentToken(): object | null {
        if (!this.isUserLoggedIn) { return null; }
        return this.token;
    }
}
