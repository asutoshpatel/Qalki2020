import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration/registration.component';
import { BookComponent } from './book/book.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes = [
  { path: '', component: RegistrationComponent},
  { path: '**', redirectTo: '' },
  { path: 'book', component: BookComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class RoutingModule {}
