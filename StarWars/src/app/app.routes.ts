import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ShipsComponent } from './components/ships/ships.component';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'ships',
    component: ShipsComponent,
    canActivate: [ LoginGuardService ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
