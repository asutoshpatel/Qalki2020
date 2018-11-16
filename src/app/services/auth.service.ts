import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {

  currentUser: Observable<User>;

  constructor(private afAuth: AngularFireAuth) {
    this.currentUser = this.afAuth.user;
  }

  async login(email, password) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.setLocalPersistence();
  }

  async signUp(fullName, email, password) {
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    this.setLocalPersistence();
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }

  setLocalPersistence() {
    this.afAuth.auth.setPersistence('local');
  }
}
