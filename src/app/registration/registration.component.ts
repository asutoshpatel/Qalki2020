import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  fullName: string;
  email: string;
  password: string;

  constructor(public afAuth: AngularFireAuth, private readonly router: Router, private authService: AuthService) {}

  ngOnInit() {
    console.log('Current user ', this.authService.currentUser);
  }

  login() {
    this.authService.login(this.email, this.password).then(() => this.navigateToBook());
  }

  signUp() {
    this.authService.signUp('', this.email, this.password).then(() => this.navigateToBook());
  }

  navigateToBook() {
    this.router.navigate(['book']);
  }
}
