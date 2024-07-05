import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}
  signinMethod(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  loginMethod(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginWithGoogleMethod() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logoutMethod() {
    return signOut(this.auth);
  }
}
