import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleClicked = false;
  loggedIn = false;

  constructor(public authService: AuthService) {}
}
