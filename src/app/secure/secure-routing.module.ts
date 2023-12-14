import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './secure.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
          path: 'home',
          loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
      },
      {
          path: 'dashboard',
          loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule)
      }
    ]
  },
];
@NgModule({
  imports: [
      RouterModule.forChild(routes)],
  exports: [
      RouterModule
  ]
})
export class SecureRoutingModule { }
