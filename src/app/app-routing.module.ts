import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule)
  },
  {
      path: 'secure',
      loadChildren: () => import('./secure/secure.module').then((m) => m.SecureModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
      preloadingStrategy: PreloadAllModules,
      useHash: true,
      paramsInheritanceStrategy: 'always',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
