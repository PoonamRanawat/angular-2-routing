import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';
import {UserDetailGuard} from './user/user-detail.guard';

const APP_ROUTES: Routes =  [
  { path: 'user/:id', component: UserComponent, canActivate: [UserDetailGuard]},
  { path: 'home', component: HomeComponent},
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '/user/1', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
