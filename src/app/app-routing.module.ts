import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(
      m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mirror',
    loadChildren: () => import('./mirror/mirror.module').then(
      m => m.MirrorPageModule),
  },
  {
    path: 'tappy',
    loadChildren: () => import('./tappy/tappy.module').then(
      m => m.TappyPageModule),
  },
  {
    path: 'face-time',
    loadChildren: () => import('./face-time/face-time.module').then(
      m => m.FaceTimePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
