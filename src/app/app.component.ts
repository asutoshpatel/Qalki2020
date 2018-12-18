import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleClicked = false;
  loggedIn = false;

  constructor(public authService: AuthService, private readonly router: Router) {}

  goToProfile() { this.router.navigate(['/profile']); }

  goToBook() { this.router.navigate(['/book']); }

  signOut() { this.authService.signOut(); }
}
