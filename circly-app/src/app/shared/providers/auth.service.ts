import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

    constructor(private afAuth: AngularFireAuth) {}

    loginWithGoogle(): void {
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    isUserLoggedIn(): Observable<boolean> {
        return this.afAuth.authState.
            map((authState:firebase.User) => !!authState).
            first();
    }

    logout(): void {
        this.afAuth.auth.signOut();
    }
}
