import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: '/user-profile', pathMatch: 'full' },
  { path: 'user-profile', component: UserProfileComponent },
];

export { ROUTES };
