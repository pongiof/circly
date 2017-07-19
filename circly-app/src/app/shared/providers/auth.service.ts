import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

    private currentUser: firebase.User;

    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(authState => {
            this.currentUser = authState;
            console.log(this.currentUser);
        })
    }

    loginWithGoogle(): void {
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    isUserLoggedIn(): boolean {
        return !!this.currentUser;
    }

    getCurrentUser(): firebase.User | null {
        if (!this.isUserLoggedIn) return null;
        return this.currentUser;
    }

    isUserLoggedInObservable(): Observable<boolean> {
        return this.afAuth.authState.
            map((authState:firebase.User) => !!authState).
            first();
    }

    logout(): firebase.Promise<any> {
        return this.afAuth.auth.signOut();
    }
}
