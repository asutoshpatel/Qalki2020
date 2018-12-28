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
  email: string;
  password: string;
  username: string;
  signUpEmail: string;
  signUpPassword: string;
  fullName: string;

  constructor(public afAuth: AngularFireAuth, private readonly router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password).then(() => this.navigateToBook());
  }

  signUp() {
    this.authService.signUp('', this.signUpEmail, this.signUpPassword).then(() => this.navigateToBook());
  }

  navigateToBook() {
    this.router.navigate(['/book']);
  }

}
