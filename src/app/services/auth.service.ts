import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: Observable<User | null>;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async login(email: string, password: string) {
    try {
      const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      return this.updateUserData(credential.user);
    } catch (error) {
      return this.handleError(error);
    }
    // this.setLocalPersistence();
  }

  async signUp(fullName: string, email: string, password: string) {
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    return this.updateUserData(credential.user);
    // this.setLocalPersistence();
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }

  private setLocalPersistence() { this.afAuth.auth.setPersistence('local'); }

  // Sets user data to firestore after succesful login
  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      fullName: user.fullName || 'nameless user'
    };
    return userRef.set(data);
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
  }
}
