import "rxjs/add/operator/first";
import "rxjs/add/operator/map";

import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";

@Injectable()
export class AuthService {

    private currentUser: firebase.User;
    private jwtToken: object;

    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(authState => {
            this.currentUser = authState;
            authState.getIdToken(true).then((token: object) => { this.jwtToken = token; });
        })
    }

    loginWithGoogle(): void {
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    isUserLoggedIn(): boolean {
        return !!this.currentUser;
    }

    getCurrentUser(): firebase.User | null {
        if (!this.isUserLoggedIn) { return null; }
        return this.currentUser;
    }

    getIdToken(): object | null {
        if (!this.isUserLoggedIn) { return null; }
        return this.jwtToken;
    }

    isUserLoggedInObservable(): Observable<boolean> {
        return this.afAuth.authState.
            map((authState: firebase.User) => !!authState).
            first();
    }

    logout(): firebase.Promise<any> {
        return this.afAuth.auth.signOut();
    }
}
