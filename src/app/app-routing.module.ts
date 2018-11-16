import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

const appRoutes: Routes = [
  { path: '', component: BookComponent},
  { path: 'book', component: BookComponent},
  { path: 'auth', component: RegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class RoutingModule {}
