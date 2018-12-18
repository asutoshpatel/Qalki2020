import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser: User;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged(user => {
      this.currentUser = user;
      console.log('Current user ', this.currentUser);
    });
  }

  async login(email, password) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    // this.setLocalPersistence();
  }

  async signUp(fullName, email, password) {
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    // this.setLocalPersistence();
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }

  setLocalPersistence() {
    this.afAuth.auth.setPersistence('local');
  }

  get isLoggedIn() {
    return this.currentUser ? true : false;
  }
}
